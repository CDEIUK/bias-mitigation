import numpy as np
import plotly
import plotly.graph_objs as go
from sklearn.metrics import roc_curve

COLORS = plotly.colors.qualitative.Plotly
TRANSPARENT = "rgba(0,0,0,0)"
GRID_COLOR = "rgb(159, 197, 232)"


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

    # Outline colours predefined for adjustability
    x_grid_color = GRID_COLOR
    y_grid_color = TRANSPARENT
    x_zero_line_color = x_grid_color
    y_zero_line_color = TRANSPARENT
    # Background colours
    paper_bgcolor = TRANSPARENT
    plot_bgcolor = TRANSPARENT

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
            "autosize": True,
            "boxmode": "group",
            "height": 200 + 40 * len(set(attr)) * len(set(groups)),
            "hovermode": "closest",
            "title": title,
            "xaxis": {
                "hoverformat": ".3f",
                "title": xlabel,
                "gridcolor": x_grid_color,
                "zerolinecolor": x_zero_line_color,
            },
            "yaxis": {
                "tickvals": unique_groups,
                "ticktext": group_names or unique_groups,
                "title": ylabel,
                "gridcolor": y_grid_color,
                "zerolinecolor": y_zero_line_color,
            },
            "paper_bgcolor": paper_bgcolor,
            "plot_bgcolor": plot_bgcolor,
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

    # Outline colours predefined for adjustability
    x_grid_color = GRID_COLOR
    y_grid_color = TRANSPARENT
    x_zero_line_color = x_grid_color
    y_zero_line_color = TRANSPARENT
    # Background colours
    paper_bgcolor = TRANSPARENT
    plot_bgcolor = TRANSPARENT

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
            "autosize": True,
            "barmode": "group",
            "height": 200 + 40 * len(set(attr)) * len(set(groups)),
            "hovermode": "closest",
            "title": title,
            "xaxis": {
                "hoverformat": ".3f",
                "title": xlabel,
                "range": [0, 1],
                "gridcolor": x_grid_color,
                "zerolinecolor": x_zero_line_color,
            },
            "yaxis": {
                "tickvals": unique_groups,
                "ticktext": group_names or unique_groups,
                "title": ylabel,
                "gridcolor": y_grid_color,
                "zerolinecolor": y_zero_line_color,
            },
            "paper_bgcolor": paper_bgcolor,
            "plot_bgcolor": plot_bgcolor,
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

    # Outline colours predefined for adjustability
    x_grid_color = GRID_COLOR
    y_grid_color = x_grid_color
    x_zero_line_color = x_grid_color
    y_zero_line_color = y_grid_color
    # Background colours
    paper_bgcolor = TRANSPARENT
    plot_bgcolor = TRANSPARENT

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
            "autosize": True,
            "xaxis": {
                "title": "False Positive Rate",
                "gridcolor": x_grid_color,
                "zerolinecolor": x_zero_line_color,
            },
            "yaxis": {
                "title": "True Positive Rate",
                "gridcolor": y_grid_color,
                "zerolinecolor": y_zero_line_color,
            },
            "paper_bgcolor": paper_bgcolor,
            "plot_bgcolor": plot_bgcolor,
        },
    )


def bar_chart(
    x, y, title="", xlabel="", ylabel="", xticks=None, yrange=[0, 1],
):
    """
    Bar chart with consistent styling as well

    x: x values
    y: y values
    title: plot title (optional)
    xlabel: x axis label (optional)
    ylabel: y axis label (optional)
    xticks: dictionary if using custom labels,
            such that{"tickvals": [...], "ticktext": [...]} (optional)
    yrange: the range of the y axis (optionaL)
    """
    # Outline colours predefined for adjustability
    x_grid_color = TRANSPARENT
    y_grid_color = GRID_COLOR
    x_zero_line_color = x_grid_color
    y_zero_line_color = y_grid_color
    # Background colours
    paper_bgcolor = TRANSPARENT
    plot_bgcolor = TRANSPARENT

    if xticks is None:
        xticks = {}
        xticks["tickvals"] = x
        xticks["ticktext"] = [str(val) for val in x]

    return go.Figure(
        [go.Bar(x=x, y=y)],
        layout={
            "autosize": True,
            "hovermode": "closest",
            "title": title,
            "xaxis": {
                "title": xlabel,
                "gridcolor": x_grid_color,
                "zerolinecolor": x_zero_line_color,
                "tickvals": xticks["tickvals"],
                "ticktext": xticks["ticktext"],
            },
            "yaxis": {
                "title": ylabel,
                "gridcolor": y_grid_color,
                "range": yrange,
                "zerolinecolor": y_zero_line_color,
            },
            "paper_bgcolor": paper_bgcolor,
            "plot_bgcolor": plot_bgcolor,
        },
    )
