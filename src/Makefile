

.PHONY: notebooks-black notebooks-black-check clean export figures install install-pipeline

install:
	cd .. ; pip install -r src/requirements.txt

install-pipeline:
	cd .. ; pip install -r src/requirements-pipeline.txt

notebooks-black:
	$(MAKE) -C notebooks black

notebooks-black-check:
	$(MAKE) -C notebooks black-check

figures:
	$(MAKE) -C notebooks figures

export:
	$(MAKE) -C notebooks export

clean:
	$(MAKE) -C notebooks clean
