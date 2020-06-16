
FIGURES_DIR = ../site/src/figures 
NOTEBOOKS_DIR = ../../notebooks

# Master notebooks
SOURCES := $(shell find . -type f -name "*.ipynb")
# Python files needed for generating the images
OBJECTS := $(SOURCES:%.ipynb=%.py)
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

.PHONY: clean export figures export

all: figures export

# Create figures from notebooks
figures: $(OBJECTS)
	@mkdir -p $(FIGURES_DIR)
	$(copy_images)

# Export cleaned notebooks
export:
	for source in $(SOURCES); do \
		mkdir -p $(shell dirname $(NOTEBOOKS_DIR)/$$source); \
		nb-filter-cells -i $$source -o $(NOTEBOOKS_DIR)/$$source -t export ; \
	done

# Clean temporary files in this folder
clean:
	@echo "=> Cleaning converted Python files (here)"
	@$(rm) $(OBJECTS)
	@echo "=> Cleaning exported images (here)"
	@find . -type f -name "*.json" -delete 
	@echo "Cleanup complete!"