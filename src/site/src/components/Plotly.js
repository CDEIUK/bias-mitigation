import React from 'react'
import Loadable from 'react-loadable'
import { withTheme } from 'styled-components'

const Plotly = Loadable({
  loader: () => import(`react-plotly.js`),
  loading: ({ timedOut }) =>
    timedOut ? (
      <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
      <blockquote>Test</blockquote>
    ),
  timeout: 10000,
})

export const LazyPlot = withTheme(({ theme, ...rest }) => (
  <Plotly
    layout={{
      margin: { t: 0, r: 0, l: 35 },
      paper_bgcolor: `rgba(0, 0, 0, 0)`,
      plot_bgcolor: `rgba(0, 0, 0, 0)`,
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
))