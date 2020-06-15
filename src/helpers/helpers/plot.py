import plotly.graph_objs as go
from sklearn.metrics import roc_curve


def group_box_plots(scores, groups, attr, group_names=None):
    """
    Helper function for plotting group box curves. Assumes binary labels.
    """
    unique_groups = sorted(set(groups))
    return go.Figure(
        data=[
            go.Box(x=groups[attr == a], y=scores[attr == a], name=a)
            for a in set(attr)
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
    for a in set(attr):
        rocs.append(
            {
                "name": a,
                "data": roc_curve(labels[attr == a], scores[attr == a]),
            }
        )

    return go.Figure(
        data=[
            go.Scatter(x=roc["data"][0], y=roc["data"][1], name=roc["name"])
            for roc in rocs
        ],
        layout={
            "xaxis": {"title": "False Positive Rate"},
            "yaxis": {"title": "True Positive Rate"},
        },
    )
