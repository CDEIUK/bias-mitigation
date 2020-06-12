import React from "react"
import Loadable from "react-loadable"

const Plotly = Loadable({
  loader: () => import(`react-plotly.js`),
  loading: ({ timedOut }) =>
    timedOut ? (
      <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
      <blockquote>Just loading now, shouldn't take long</blockquote>
    ),
  timeout: 10000,
})

export const LazyPlot = ({ ...rest }) => (
  <Plotly
    layout={{
      margin: { t: 0, r: 0, l: 35 },
      paper_bgcolor: `rgba(0, 0, 0, 0)`,
      plot_bgcolor: `rgba(0, 0, 0, 0)`,
      font: {
        color: `black`,
        size: 16,
      },
      // The next 3 directives make the plot responsive.
      autosize: true,
    }}
    style={{ width: `100%` }}
    useResizeHandler
    config={{
      displayModeBar: false,
      showTips: false,
    }}
    {...rest}
  />
)
