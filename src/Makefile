

.PHONY: clean export figures install install-pipeline

install:
	cd .. ; pip install -r src/requirements.txt

install-pipeline:
	cd .. ; pip install -r src/requirements-pipeline.txt

figures:
	$(MAKE) -C notebooks figures

export:
	$(MAKE) -C notebooks export

clean:
	$(MAKE) -C notebooks clean
