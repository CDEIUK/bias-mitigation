SRC = helpers

.PHONY: clean export figures preinstall install install-pipeline install-linting \
	notebooks-black notebooks-black-check notebooks-flake8 \
	src-black src-black-check src-flake8

preinstall:
	@python3 -m pip install --upgrade pip setuptools wheel

install: preinstall
	cd .. ; python3 -m pip install -r src/requirements.txt

install-pipeline: preinstall
	cd .. ; python3 -m pip install -r src/requirements.txt ; python3 -m pip install -r src/requirements-pipeline.txt

install-linting: preinstall
	cd .. ; pip install -r src/requirements-linting.txt

src-black:
	black $(SRC)

src-black-check:
	black --check $(SRC)

src-flake8:
	flake8 --ignore E203,W503 --count --show-source --statistics $(SRC)

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

site-format:
	cd site; npm run-script format

site-format-check:
	cd site; npm run-script format-check
