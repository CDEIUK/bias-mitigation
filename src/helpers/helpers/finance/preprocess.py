"""
This submodule contains code for acquiring and preprocessing the Adult data
from the UCI Machine Learning Repository.
"""
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

TRAIN_URL = "https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.data"  # noqa
TEST_URL = "https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.test"  # noqa

NAMES = [
    "age",
    "workclass",
    "fnlwgt",
    "education",
    "education_num",
    "marital_status",
    "occupation",
    "relationship",
    "race",
    "sex",
    "capital_gain",
    "capital_loss",
    "hours_per_week",
    "native_country",
    "salary",
]


def clean_string(s):
    """
    Helper function that strips leading / trailing whitespace, lower
    cases, and replaces hyphens with underscores.
    """
    return s.strip().lower().replace("-", "_")


def parse_native_country(country):
    """
    Group countries other than United-States and Mexico into single
    "other" category"
    """
    country = clean_string(country)
    if country == "united_states" or country == "mexico":
        return country
    return "other"


def preprocess(data_dir):
    """
    Download and preprocess the adult data, save in directory specified by
    data_dir.

    Parameters
    ----------
    data_dir: pathlib.Path
        Directory in which to save the processed data.
    """
    train = (
        pd.read_csv(TRAIN_URL, header=None, na_values=[" ?"], names=NAMES)
        .drop(columns=["fnlwgt", "education_num"])
        # drop all rows with missing values
        .dropna()
        .reset_index(drop=True)
        # simple preprocessing on columns
        .assign(
            # clean all string columns
            education=lambda df: df.education.map(clean_string),
            marital_status=lambda df: df.marital_status.map(clean_string),
            occupation=lambda df: df.occupation.map(clean_string),
            race=lambda df: df.race.map(clean_string),
            relationship=lambda df: df.relationship.map(clean_string),
            workclass=lambda df: df.workclass.map(clean_string),
            # clean and aggregate native_country
            native_country=lambda df: df.native_country.map(
                parse_native_country
            ),
            # encode binary features as integers
            salary=lambda df: (df.salary == " >50K").astype(np.int32),
            sex=lambda df: (df.sex == " Male").astype(np.int32),
        )
    )

    test = (
        pd.read_csv(
            TEST_URL, header=None, na_values=[" ?"], skiprows=1, names=NAMES
        )
        .drop(columns=["fnlwgt", "education_num"])
        # drop all rows with missing values
        .dropna()
        .reset_index(drop=True)
        # simple preprocessing on columns
        .assign(
            # clean all string columns
            education=lambda df: df.education.map(clean_string),
            marital_status=lambda df: df.marital_status.map(clean_string),
            occupation=lambda df: df.occupation.map(clean_string),
            race=lambda df: df.race.map(clean_string),
            relationship=lambda df: df.relationship.map(clean_string),
            workclass=lambda df: df.workclass.map(clean_string),
            # clean and aggregate native_country
            native_country=lambda df: df.native_country.map(
                parse_native_country
            ),
            # encode binary features as integers
            # note extra '.' in test set not present in train set
            salary=lambda df: (df.salary == " >50K.").astype(np.int32),
            sex=lambda df: (df.sex == " Male").astype(np.int32),
        )
    )

    assert set(train.education) == set(test.education)
    assert set(train.race) == set(test.race)
    assert set(train.relationship) == set(test.relationship)
    assert set(train.marital_status) == set(test.marital_status)

    one_hot_features = [
        "workclass",
        "education",
        "occupation",
        "race",
        "relationship",
        "marital_status",
        "native_country",
    ]

    cts_features = ["age", "capital_gain", "capital_loss", "hours_per_week"]

    binary_features = ["sex", "salary"]

    train_df = pd.concat(
        [
            train,
            pd.get_dummies(train.loc[:, one_hot_features], dtype=np.int32),
        ],
        axis=1,
    )

    test_df = pd.concat(
        [test, pd.get_dummies(test.loc[:, one_hot_features], dtype=np.int32)],
        axis=1,
    )

    assert train_df.columns.tolist() == test_df.columns.tolist()
    train_df, val_df = train_test_split(
        train_df, test_size=0.2, random_state=42
    )

    # ensure directory exists before saving
    (data_dir / "processed").mkdir(parents=True, exist_ok=True)

    original_features = cts_features + one_hot_features + binary_features

    train_df[original_features].to_csv(
        data_dir / "processed" / "train.csv", index=False
    )
    val_df[original_features].to_csv(
        data_dir / "processed" / "val.csv", index=False
    )
    test_df[original_features].to_csv(
        data_dir / "processed" / "test.csv", index=False
    )

    ss = StandardScaler()

    train_df[cts_features] = ss.fit_transform(train_df[cts_features])
    val_df[cts_features] = ss.transform(val_df[cts_features])
    test_df[cts_features] = ss.transform(test_df[cts_features])

    train_df.drop(columns=one_hot_features).to_csv(
        data_dir / "processed" / "train-one-hot.csv", index=False
    )
    val_df.drop(columns=one_hot_features).to_csv(
        data_dir / "processed" / "val-one-hot.csv", index=False
    )
    test_df.drop(columns=one_hot_features).to_csv(
        data_dir / "processed" / "test-one-hot.csv", index=False
    )
