import json

import numpy as np


class NumpyEncoder(json.JSONEncoder):
    """
    Encode Numpy objects as JSON objects
    """

    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)


def export_plot(figure, filename):
    """
    Export a Plotly figure as a standard JSON file
    """
    figure_json = figure.to_plotly_json()
    with open(filename, "w") as outfile:
        json.dump(figure_json, outfile, cls=NumpyEncoder)
