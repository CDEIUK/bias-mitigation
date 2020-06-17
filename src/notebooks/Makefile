
FIGURES_DIR = ../site/src/figures
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
	nbstripout $<

.PHONY: clean export figures export

all: figures export

# Create figures from notebooks
figures: $(OBJECTS)
	@mkdir -p $(FIGURES_DIR)
	$(copy_images)

export: $(CLEANNOTEBOOKS)

# Clean temporary files in this folder
clean:
	@echo "=> Removing converted Python files (src)"
	@$(rm) $(OBJECTS)
	@echo "=> Removing exported images (src)"
	@find . -type f -name "*.json" -delete
	@echo "=> Removing cleaned notebooks (notebooks)"
	@$(rm) -r $(CLEANNOTEBOOKS)
	@echo "Cleanup complete!"
