import numpy as np
import plotly
import plotly.graph_objs as go
from sklearn.metrics import roc_curve

COLORS = plotly.colors.qualitative.Plotly


def _hex_to_rgba(hex_code, a=0.3):
    def cast(s):
        return int(s, 16)

    r = cast(hex_code[1:3])
    g = cast(hex_code[3:5])
    b = cast(hex_code[5:7])
    return f"rgba({r},{g},{b},{a})"


def group_box_plots(
    scores,
    attr,
    groups=None,
    group_names=None,
    title="",
    xlabel="",
    ylabel="",
):
    """
    Helper function for plotting group box curves. Assumes binary labels.
    """
    if groups is None:
        groups = np.zeros_like(scores)
        group_names = [""]

    unique_groups = sorted(set(groups))

    return go.Figure(
        data=[
            go.Box(
                x=scores[attr == a],
                y=groups[attr == a],
                name=a,
                orientation="h",
                marker={"color": _hex_to_rgba(COLORS[i], 0.1)},
                line_color=COLORS[i],
                hoverinfo="name+x",
            )
            for i, a in enumerate(sorted(set(attr)))
        ],
        layout={
            "boxmode": "group",
            "height": 200 + 40 * len(set(attr)) * len(set(groups)),
            "hovermode": "closest",
            "title": title,
            "xaxis": {"hoverformat": ".3f", "title": xlabel},
            "yaxis": {
                "tickvals": unique_groups,
                "ticktext": group_names or unique_groups,
                "title": ylabel,
            },
        },
    )


def group_bar_plots(
    scores,
    attr,
    groups=None,
    group_names=None,
    title="",
    xlabel="",
    ylabel="",
):
    if groups is None:
        groups = np.zeros_like(scores)
        group_names = [""]

    unique_groups = sorted(set(groups))

    return go.Figure(
        data=[
            go.Bar(
                x=[
                    scores[(attr == a) & (groups == group)].mean()
                    for group in unique_groups
                ],
                y=unique_groups,
                name=a,
                orientation="h",
                hoverinfo="name+x",
            )
            for a in sorted(set(attr))
        ],
        layout={
            "barmode": "group",
            "height": 200 + 40 * len(set(attr)) * len(set(groups)),
            "hovermode": "closest",
            "title": title,
            "xaxis": {"hoverformat": ".3f", "title": xlabel, "range": [0, 1]},
            "yaxis": {
                "tickvals": unique_groups,
                "ticktext": group_names or unique_groups,
                "title": ylabel,
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
