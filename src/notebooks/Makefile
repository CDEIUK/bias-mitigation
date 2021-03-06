
FIGURES_DIR = ../site/static/figures
NOTEBOOKS_DIR = ../../notebooks

# Master notebooks
SOURCES := $(shell find . -type f -name "*.ipynb" ! -path "*/.ipynb_checkpoints/*")
# Python files needed for generating the images
OBJECTS := $(SOURCES:%.ipynb=%.py)
CLEANNOTEBOOKS = $(addprefix $(NOTEBOOKS_DIR)/, $(SOURCES))
rm       = rm -f

OS := $(shell uname)
ifeq ($(OS), Darwin)
	# MacOS has a different version of "cp" that doesn't have "parents"
	# Install coreutils (with brew) to use this line on MacOS
	copy_images = find . -iname '*.json' -exec gcp --parents {} $(FIGURES_DIR) \;
else
	copy_images = find . -iname '*.json' -exec cp --parents {} $(FIGURES_DIR) \;
endif

%.py: %.ipynb
	@echo "=> Converting $<"
	jupyter nbconvert --to python $<
	cd $(dir $<) && python $(notdir $@)

$(NOTEBOOKS_DIR)/%.ipynb: %.ipynb
	@mkdir -p $(dir $@)
	nb-filter-cells -i $< -o $@ -t export
	nbstripout $@

.PHONY: black black-check clean export flake8 figures

all: black flake8 figures export

black:
	black-nb $(SOURCES)

black-check:
	black-nb --check $(SOURCES)

flake8:
	flake8-nb --ignore E203,W503 --max-line-length 88 --count --show-source --statistics $(SOURCES)

# Clean temporary files in this folder
clean:
	@echo "=> Removing converted Python files (src)"
	@$(rm) $(OBJECTS)
	@echo "=> Removing exported images (src)"
	@find . -type f -name "*.json" -delete
	@echo "=> Removing cleaned notebooks (notebooks)"
	@$(rm) -r $(CLEANNOTEBOOKS)
	@echo "Cleanup complete!"

# Create the clean exports
export: black $(CLEANNOTEBOOKS)

# Create figures from notebooks
figures: $(OBJECTS)
	@mkdir -p $(FIGURES_DIR)
	$(copy_images)
