SRC = helpers

.PHONY: notebooks-black notebooks-black-check clean export figures \
    install install-pipeline src-black src-black-check

install:
	cd .. ; pip install -r src/requirements.txt

install-pipeline:
	cd .. ; pip install -r src/requirements-pipeline.txt

src-black:
	black $(SRC)

src-black-check:
	black --check $(SRC)

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
