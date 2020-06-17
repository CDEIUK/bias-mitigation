"""
Helper functions for computing various fairness measures
"""
import numpy as np


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
    return np.abs(scores[~a_mask].mean() - scores[a_mask].mean())


def disparate_impact_d(scores, attr):
    """
    Computes disparate impact on decision level
    """
    a_mask = attr == 1
    return np.abs(
        (scores[~a_mask] >= 0.5).mean() - (scores[a_mask] >= 0.5).mean()
    )


def equal_opportunity_p(scores, attr, labels):
    """
    Computes equal opportunity on probability level
    """
    a_mask = attr == 1
    y_mask = labels == 1
    return disparate_impact_p(scores[y_mask], a_mask[y_mask])


def equal_opportunity_d(scores, attr, labels):
    """
    Computes equal opportunity on decision level
    """
    a_mask = attr == 1
    y_mask = labels == 1
    return disparate_impact_d(scores[y_mask], a_mask[y_mask])


def equalised_odds_p(scores, attr, labels):
    """
    Computes equalised odds on probability level
    """
    a_mask = attr == 1
    y_mask = labels == 1

    eo_0 = disparate_impact_p(scores[~y_mask], a_mask[~y_mask])
    eo_1 = disparate_impact_p(scores[y_mask], a_mask[y_mask])
    return np.mean([eo_0, eo_1])


def equalised_odds_d(scores, attr, labels):
    """
    Computes equalised odds on decision level
    """
    a_mask = attr == 1
    y_mask = labels == 1

    eo_0 = disparate_impact_d(scores[~y_mask], a_mask[~y_mask])
    eo_1 = disparate_impact_d(scores[y_mask], a_mask[y_mask])
    return np.mean([eo_0, eo_1])


def calibration(scores, attr, labels, n):
    """
    Computes calibration
    """
    a_mask = attr == 1
    y_mask = labels == 1

    # Count differences between two groups within bins
    bins = np.linspace(0, 1, n + 1)

    cal_y1 = 0
    cal_y0 = 0
    for i in range(len(bins) - 1):
        proportion_y1_a0 = (
            (
                (scores[~a_mask & y_mask] > bins[i])
                & (scores[~a_mask & y_mask] < bins[i + 1])
            ).sum()
            / (
                (scores[~a_mask] > bins[i]) & (scores[~a_mask] < bins[i + 1])
            ).sum()
        )
        proportion_y1_a1 = (
            (
                (scores[a_mask & y_mask] > bins[i])
                & (scores[a_mask & y_mask] < bins[i + 1])
            ).sum()
            / (
                (scores[a_mask] > bins[i]) & (scores[a_mask] < bins[i + 1])
            ).sum()
        )
        cal_y1 += 1.0 - np.abs(proportion_y1_a0 - proportion_y1_a1)

        proportion_y0_a0 = (
            (
                (scores[~a_mask & ~y_mask] > bins[i])
                & (scores[~a_mask & ~y_mask] < bins[i + 1])
            ).sum()
            / (
                (scores[~a_mask] > bins[i]) & (scores[~a_mask] < bins[i + 1])
            ).sum()
        )

        proportion_y0_a1 = (
            (
                (scores[a_mask & ~y_mask] > bins[i])
                & (scores[a_mask & ~y_mask] < bins[i + 1])
            ).sum()
            / (
                (scores[a_mask] > bins[i]) & (scores[a_mask] < bins[i + 1])
            ).sum()
        )
        cal_y0 += 1.0 - np.abs(proportion_y0_a0 - proportion_y0_a1)

    return np.mean([cal_y1, cal_y0]) / n
