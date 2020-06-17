SRC = helpers

.PHONY: clean export figures install install-pipeline \
	notebooks-black notebooks-black-check notebooks-flake8 \
	src-black src-black-check src-flake8

install:
	cd .. ; pip install -r src/requirements.txt

install-pipeline:
	cd .. ; pip install -r src/requirements-pipeline.txt

src-black:
	black $(SRC)

src-black-check:
	black --check $(SRC)

src-flake8:
	flake8 $(SRC)

notebooks-black:
	$(MAKE) -C notebooks black

notebooks-black-check:
	$(MAKE) -C notebooks black-check

notebooks-flake8:
	$(MAKE) -C notebooks flake8

figures:
	$(MAKE) -C notebooks figures

export:
	$(MAKE) -C notebooks export

clean:
	$(MAKE) -C notebooks clean
