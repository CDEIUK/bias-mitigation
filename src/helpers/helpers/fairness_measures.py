import numpy as np

"""
Helper functions for computing various fairness measures
"""

def accuracy(scores, labels):
    """
    Computes accuracy
    
    """
    return ((scores >= 0.5) == labels).mean()

def disparate_impact_p(scores, attr):
    """
    Computes disparate impact on probability level
    
    """
    a_mask = attr == 1
    di = np.abs(scores[~a_mask].mean() - scores[a_mask].mean())
    return di


def disparate_impact_d(scores, attr):
    """
    Computes disparate impact on decision level
    
    """
    a_mask = attr == 1
    di = np.abs(
        (scores[~a_mask] >= 0.5).mean() - (scores[a_mask] >= 0.5).mean()
    )
    return di

def equal_opportunity_p(scores, attr, labels):
    """
    Computes equal opportunity on probability level
    
    """
    a_mask = attr == 1
    y_mask = labels == 1

    eopp = disparate_impact_p(scores[y_mask], a_mask[y_mask])

    return eopp
    
def equal_opportunity_d(scores, attr, labels):
    """
    Computes equal opportunity on decision level
    
    """
    a_mask = attr == 1
    y_mask = labels == 1

    eopp = disparate_impact_d(scores[y_mask], a_mask[y_mask])

    return eopp   
    

def equalised_odds_p(scores, attr, labels):
    """
    Computes equalised odds on probability level
    
    """
    a_mask = attr == 1
    y_mask = labels == 1

    eo_0 = disparate_impact_p(scores[~y_mask], a_mask[~y_mask])
    eo_1 = disparate_impact_p(scores[y_mask], a_mask[y_mask])
    eo = np.mean([eo_0, eo_1])

    return eo


def equalised_odds_d(scores, attr, labels):
    """
    Computes equalised odds on decision level
    
    """
    a_mask = attr == 1
    y_mask = labels == 1

    eo_0 = disparate_impact_d(scores[~y_mask], a_mask[~y_mask])
    eo_1 = disparate_impact_d(scores[y_mask], a_mask[y_mask])
    eo = np.mean([eo_0, eo_1])

    return eo


def calibration(scores, attr, labels, n):
    """
    Computes calibration
    
    """
    a_mask = attr == 1
    y_mask = labels == 1

    # Count differences between two groups within bins
    bins = np.linspace(0, 1, n + 1)

    fair_1 = 0
    fair_0 = 0
    for i in range(len(bins) - 1):
        fair_1 += 1.0 - np.abs(
            (
                (scores[~a_mask & y_mask] > bins[i])
                & (scores[~a_mask & y_mask] < bins[i + 1])
            ).sum()
            / (
                (scores[~a_mask] > bins[i]) & (scores[~a_mask] < bins[i + 1])
            ).sum()
            - (
                (scores[a_mask & y_mask] > bins[i])
                & (scores[a_mask & y_mask] < bins[i + 1])
            ).sum()
            / (
                (scores[a_mask] > bins[i]) & (scores[a_mask] < bins[i + 1])
            ).sum()
        )
        fair_0 += 1.0 - np.abs(
            (
                (scores[~a_mask & ~y_mask] > bins[i])
                & (scores[~a_mask & ~y_mask] < bins[i + 1])
            ).sum()
            / (
                (scores[~a_mask] > bins[i]) & (scores[~a_mask] < bins[i + 1])
            ).sum()
            - (
                (scores[a_mask & ~y_mask] > bins[i])
                & (scores[a_mask & ~y_mask] < bins[i + 1])
            ).sum()
            / (
                (scores[a_mask] > bins[i]) & (scores[a_mask] < bins[i + 1])
            ).sum()
        )
    cal = np.mean([fair_1, fair_0]) / n

    return cal
