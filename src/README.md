# Bias exploration source

This folder contains all of the source for the repository including:

- `helpers/`: a Python package of helper functions we use repeatedly in our analysis, including commonly used plotting functions and metrics
- `notebooks/`: raw versions of all the notebooks used in our analysis. These notebooks are run when the app is built to ensure plots in the app are in sync with the notebooks in the root of this directory. Any cell with the tag `export` is stripped out during notebook generation.
- `site/`: Contains the source code for the website. See `site/README.md` for more details.

## Development

Most tasks are automated by the `Makefile` in this directory. To run Python source code or notebook linters locally you will need to run

```sh
pip install -r requirements-linting.txt
```

To run the site source linters you will need `npm` installed, see the site README for more details.

- `make clean`: remove generated Python scripts and JSON figures
- `make figures`: regenerate all of the figures from the notebooks and move them to `src/site/src/figures`
- `make export`: export cleaned notebooks to `notebooks/`
- `make notebooks-black`: format all notebooks with `black-nb`
- `make notebooks-black-check`: check formatting of all notebooks with `black-nb`
- `make notebooks-flake8`: lint source code in all notebooks with `flake8-nb`
- `make site-format`: format source code of the website
- `make site-format-check`: lint source code of the website
