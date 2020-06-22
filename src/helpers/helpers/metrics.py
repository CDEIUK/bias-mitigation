"""
Helper functions for computing various fairness measures
"""
import numpy as np
from fairlearn.metrics import (
    demographic_parity_difference,
    demographic_parity_ratio,
)


def accuracy(labels, scores, threshold=0.5):
    """
    Computes accuracy from scores and labels. Assumes binary classification.
    """
    return ((scores >= threshold) == labels).mean()


def demographic_parity_prob(scores, attr):
    """
    Computes demographic parity on probability level.
    """
    a_mask = attr == 1
    return np.abs(scores[~a_mask].mean() - scores[a_mask].mean())


def conditional_demographic_parity_difference(labels, pred, attr, groups):
    """
    Calculate conditional demographic parity by calculating the average
    demographic parity difference across bins defined by `groups`.
    """
    diffs = []

    for group in set(groups):
        mask = groups == group

        diffs.append(
            demographic_parity_difference(
                labels[mask], pred[mask], sensitive_features=attr[mask]
            )
        )

    return np.mean(diffs)


def conditional_demographic_parity_ratio(labels, pred, attr, groups):
    """
    Calculate conditional demographic parity by calculating the average
    demographic parity ratio across bins defined by `groups`.
    """
    ratios = []

    for group in set(groups):
        mask = groups == group

        ratios.append(
            demographic_parity_ratio(
                labels[mask], pred[mask], sensitive_features=attr[mask]
            )
        )

    return np.mean(ratios)


def equal_opportunity_prob(labels, scores, attr):
    """
    Computes equal opportunity on probability level
    """
    y_mask = labels == 1
    return demographic_parity_prob(scores[y_mask], attr[y_mask])


def equalised_odds_prob(labels, scores, attr):
    """
    Computes equalised odds on probability level
    """
    a_mask = attr == 1
    y_mask = labels == 1

    eo_0 = demographic_parity_prob(scores[~y_mask], a_mask[~y_mask])
    eo_1 = demographic_parity_prob(scores[y_mask], a_mask[y_mask])
    return np.mean([eo_0, eo_1])


def calibration_probabilities(labels, scores, n_bins=10):
    """
    Computes calibration probabilities per bin (i.e. P(Y = 1 | score)) for a
    set of scores and labels.
    """
    bins = np.linspace(0, 1, n_bins + 1)
    probabilities = np.zeros(n_bins)

    for i, (low, high) in enumerate(zip(bins[:-1], bins[1:])):
        if high == 1:
            # allow equality with one in the final bin
            high = 1.01

        mask = (scores >= low) & (scores < high)
        probabilities[i] = labels[mask].mean()

    return probabilities


def calibration_difference(labels, scores, attr, n_bins=10):
    """
    Computes average calibration difference between protected groups. Currently
    assumes binary protected attribute.
    """
    mask = attr == 1

    a0_calibration_probabilities = calibration_probabilities(
        labels[~mask], scores[~mask], n_bins
    )
    a1_calibration_probabilities = calibration_probabilities(
        labels[mask], scores[mask], n_bins
    )

    # if a bin is empty we get a nan, so use nanmean to aggregate only over
    # mutually non-empty bins
    return np.nanmean(
        np.abs(a0_calibration_probabilities - a1_calibration_probabilities)
    )
