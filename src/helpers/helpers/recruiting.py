def bin_years_experience(experience):
    """
    Bin the years of experience variable into 0-2, 3-5, 6-9, 10+ bins.
    """
    if experience <= 2:
        return 0
    elif experience <= 5:
        return 1
    elif experience <= 9:
        return 2
    return 3
