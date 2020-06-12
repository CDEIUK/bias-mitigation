from setuptools import find_packages, setup

setup(
    name="cdei-helpers",
    version="0.1.0",
    packages=find_packages(),
    author="Faculty <opensource@faculty.ai>",
    install_requires=["numpy", "plotly", "scikit-learn"],
)
