SRC = helpers

.PHONY: clean export figures preinstall install install-pipeline install-linting \
	src-black src-black-check src-flake8

preinstall:
	@python3 -m pip install --upgrade pip setuptools wheel

install:
	cd .. ; python3 -m pip install -r src/requirements.txt

install-pipeline:
	cd .. ; python3 -m pip install -r src/requirements-pipeline.txt

install-linting:
	cd .. ; pip install -r src/requirements-linting.txt

src-black:
	black $(SRC)

src-black-check:
	black --check $(SRC)

src-flake8:
	flake8 --ignore E203,W503 --count --show-source --statistics $(SRC)

site-format:
	cd site; npm run-script format

site-format-check:
	cd site; npm run-script format-check
