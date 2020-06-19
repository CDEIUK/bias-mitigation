def bin_hours_per_week(hpw):
    """
    Bin the hours per week variable into 0-30, 31-40, 41-50, 50+ bins.
    """
    if hpw <= 30:
        return 0
    elif hpw <= 40:
        return 1
    elif hpw <= 50:
        return 2
    return 3
