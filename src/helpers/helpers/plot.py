import numpy as np
import plotly
import plotly.graph_objs as go
from sklearn.metrics import roc_curve

COLORS = plotly.colors.qualitative.Plotly


def group_box_plots(scores, groups, attr, group_names=None):
    """
    Helper function for plotting group box curves. Assumes binary labels.
    """
    unique_groups = sorted(set(groups))
    return go.Figure(
        data=[
            go.Box(x=groups[attr == a], y=scores[attr == a], name=a)
            for a in sorted(set(attr))
        ],
        layout={
            "boxmode": "group",
            "xaxis": {
                "tickvals": unique_groups,
                "ticktext": group_names or unique_groups,
            },
        },
    )


def group_roc_curves(labels, scores, attr):
    """
    Helper function for plotting group ROC curves. Assumes binary labels.
    """
    rocs = []
    for a in sorted(set(attr)):
        data = roc_curve(labels[attr == a], scores[attr == a])
        thresh_index = min(np.where(data[2] <= 0.5)[0])
        rocs.append({"name": a, "data": data, "thresh_index": thresh_index})

    return go.Figure(
        data=[
            go.Scatter(x=roc["data"][0], y=roc["data"][1], name=roc["name"])
            for roc in rocs
        ]
        + [
            go.Scatter(
                x=[roc["data"][0][roc["thresh_index"]]],
                y=[roc["data"][1][roc["thresh_index"]]],
                name=f"{roc['name']} - threshold",
                mode="markers",
                marker={"color": COLORS[i], "size": 15},
            )
            for i, roc in enumerate(rocs)
        ],
        layout={
            "xaxis": {"title": "False Positive Rate"},
            "yaxis": {"title": "True Positive Rate"},
        },
    )
