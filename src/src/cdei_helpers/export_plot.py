import json

import numpy as np

#### Set up ndarray encoder
class NumpyEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)

def export_plot(figure, filename):
    figure_json = figure.to_plotly_json()
    with open(filename, 'w') as outfile:
        json.dump(figure_json, outfile, cls=NumpyEncoder)