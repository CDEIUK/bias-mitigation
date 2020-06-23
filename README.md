# Bias exploration

![Build and Deploy Site](https://github.com/imrehg/cdei-development/workflows/Build%20and%20Deploy%20Site/badge.svg)
![Clean and Release Notebooks](https://github.com/imrehg/cdei-development/workflows/Clean%20and%20Release%20Notebooks/badge.svg)

This repository contains an analysis of bias mitigation algorithms in machine learning. We apply a range of interventions to two data sets and compare results.

You can view the results of our analysis and an accompanying discussion on our accompanying [website][site].

Notebooks containing all of our analysis can be found in the `notebooks/` folder. You can run any one of them in your browser without installing anything courtesy of [Binder][binder]. Alternatively clone this repository to run the notebooks locally. You can install the required dependencies with

```sh
pip install -r ./src/requirements.txt
```

## Development

All source code is contained in `src/`, including raw versions of the notebooks. See the README in `src/` for more details.

[binder]: https://mybinder.org/v2/gh/imrehg/cdei-development/master?filepath=notebooks
[site]: https://imrehg.github.io/cdei-development/
