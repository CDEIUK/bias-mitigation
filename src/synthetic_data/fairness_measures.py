import numpy as np

def independence_p(scores, attr):
    a_mask = attr == 1
    indep_p = 1 - np.abs(scores[~a_mask].mean() - scores[a_mask].mean())
    return indep_p


def independence_d(scores, attr):
    a_mask = attr == 1
    indep_d = 1 - np.abs(
        (scores[~a_mask] >= 0.5).mean() - (scores[a_mask] >= 0.5).mean()
    )
    return indep_d

def equal_opp_p(scores, attr, labels):
    a_mask = attr == 1
    y_mask = labels == 1

    fairp = independence_p(scores[y_mask], a_mask[y_mask])

    return fairp

def separation_p(scores, attr, labels):
    a_mask = attr == 1
    y_mask = labels == 1

    fairp_1 = independence_p(scores[y_mask], a_mask[y_mask])
    fairp_0 = independence_p(scores[~y_mask], a_mask[~y_mask])
    fairp = np.mean([fairp_0, fairp_1])

    return fairp


def separation_d(scores, attr, labels):
    a_mask = attr == 1
    y_mask = labels == 1

    faird_1 = independence_d(scores[y_mask], a_mask[y_mask])
    faird_0 = independence_d(scores[~y_mask], a_mask[~y_mask])
    faird = np.mean([faird_0, faird_1])

    return faird


def sufficiency(scores, attr, labels, n):
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
    suf = np.mean([fair_1, fair_0]) / n

    return suf


def accuracy(scores, labels):

    return ((scores >= 0.5) == labels).mean()