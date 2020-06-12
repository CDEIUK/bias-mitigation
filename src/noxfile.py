import glob

import nox

PYTHON_SOURCES = ["noxfile.py", "src"]


@nox.session()
def lint(session):
    session.install("black", "black-nb", "flake8", "isort", "nb-clean")

    # lint python source
    session.run("black", "--check", *PYTHON_SOURCES)
    session.run("flake8", *PYTHON_SOURCES)
    session.run("isort", "--check", "--recursive", *PYTHON_SOURCES)

    # lint notebooks
    session.run("black-nb", "--check", ".")
    for nb in glob.glob("**/*.ipynb"):
        if ".ipynb_checkpoints" in str(nb):
            continue
        session.run("nb-clean", "check", "-i", nb)
