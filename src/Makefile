.PHONY: clean export figures preinstall install install-pipeline install-linting

preinstall:
	@python3 -m pip install --upgrade pip setuptools wheel

install:
	cd .. ; python3 -m pip install -r src/requirements.txt

install-pipeline:
	cd .. ; python3 -m pip install -r src/requirements-pipeline.txt

install-linting:
	cd .. ; pip install -r src/requirements-linting.txt

site-format:
	cd site; npm run-script format

site-format-check:
	cd site; npm run-script format-check
