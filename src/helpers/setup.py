from setuptools import find_packages, setup

setup(
    name="helpers",
    version="0.1.0",
    packages=find_packages(),
    author="Faculty <opensource@faculty.ai>",
    install_requires=[
        "fairlearn==0.4.6",
        "numpy==1.18.5",
        "plotly==4.8.1",
        "scikit-learn==0.23.1",
    ],
)
