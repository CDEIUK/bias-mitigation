#!/usr/bin/env python
# coding: utf-8

# # Adult preprocessing
# 
# This script contains all preprocessing of the [Adult dataset](https://archive.ics.uci.edu/ml/datasets/Adult)

# In[1]:


import os
from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler


# The column names are available in the [`adult.names`](https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.names) file which contains lots of additional information. We hard code them here for convenience.

# In[2]:


names = [
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


# Data contains a "native country" feature. Other than USA and Mexico, many of the features have low numbers of observations, so we group them into a single category using this function.

# In[3]:


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


# Load train set and apply some basic preprocessing. Categorical features are left as strings for now to be one-hot encoded shortly. We drop `fnlwgt` as it represents census weights that are not relevant to our analysis, and `education-num` as it duplicates data present in the `education` feature which we use instead.

# In[4]:

def preprocess(data_dir):
    train = (
        pd.read_csv(
            "https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.data",
            header=None,
            na_values=[" ?"],
            names=names,
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
            native_country=lambda df: df.native_country.map(parse_native_country),
            # encode binary features as integers
            salary=lambda df: (df.salary == " >50K").astype(np.int32),
            sex=lambda df: (df.sex == " Male").astype(np.int32),
        )
    )


    # Load test set and apply similar basic preprocessing. Note `adult.test` file has an extra line at the start of the file we ignore, and that the `salary` column is coded differently to `adult.data` in a subtle way (has an extra `.`). 

    # In[5]:


    test = (
        pd.read_csv(
            "https://archive.ics.uci.edu/ml/machine-learning-databases/adult/adult.test",
            header=None,
            na_values=[" ?"],
            skiprows=1,
            names=names,
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
            native_country=lambda df: df.native_country.map(parse_native_country),
            # encode binary features as integers
            # note extra '.' in test set not present in train set
            salary=lambda df: (df.salary == " >50K.").astype(np.int32),
            sex=lambda df: (df.sex == " Male").astype(np.int32),
        )
    )


    # Sanity check that categories in categorical variables are the same for train and test sets.

    # In[6]:


    assert set(train.education) == set(test.education)
    assert set(train.race) == set(test.race)
    assert set(train.relationship) == set(test.relationship)
    assert set(train.marital_status) == set(test.marital_status)


    # In[7]:


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


    # We one-hot encode categorical features. We'll keep both one-hot encodings and the original categorical encodings for now, as we want to construct two versions of the data, one for training the model on, and one for making visualisations.

    # In[8]:


    train_df = pd.concat(
        [train, pd.get_dummies(train.loc[:, one_hot_features], dtype=np.int32)],
        axis=1,
    )

    test_df = pd.concat(
        [test, pd.get_dummies(test.loc[:, one_hot_features], dtype=np.int32)],
        axis=1,
    )


    # Sanity check that the columns are the same (including order).

    # In[9]:


    assert train_df.columns.tolist() == test_df.columns.tolist()


    # We further split the train set to create a validation set.

    # In[10]:


    train_df, val_df = train_test_split(train_df, test_size=0.2, random_state=42)


    # Save all splits to disk without one-hot encodings. This version of the data will be used for exploration and making plots.

    # In[11]:


    # # temporary platform specific directory
    # data_dir = Path("/project/data/adult")

    try:
        os.makedirs(data_dir / "processed")
    except FileExistsError:
        pass
    except:
        raise

    # In[12]:


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


    # We now scale the continuous features and drop the categorical encodings, which will be used for model training.

    # In[13]:


    ss = StandardScaler()

    train_df[cts_features] = ss.fit_transform(train_df[cts_features])
    val_df[cts_features] = ss.transform(val_df[cts_features])
    test_df[cts_features] = ss.transform(test_df[cts_features])


    # In[14]:


    train_df.drop(columns=one_hot_features).to_csv(
        data_dir / "processed" / "train-one-hot.csv", index=False
    )
    val_df.drop(columns=one_hot_features).to_csv(
        data_dir / "processed" / "val-one-hot.csv", index=False
    )
    test_df.drop(columns=one_hot_features).to_csv(
        data_dir / "processed" / "test-one-hot.csv", index=False
    )


if __name__ == "__main__":
    preprocess(Path("."))