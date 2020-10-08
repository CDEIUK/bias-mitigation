/**
 * Code from OutboundLink module in gatsby-plugin-google-anayltics
 * modified to use google-plugin-gdpr-tracking native methods to handle cookie consent
 */

import React from "react"
import PropTypes from "prop-types"

export default function OutboundLink(props) {
  return (
    <a
      {...props}
      onClick={e => {
        if (typeof props.onClick === `function`) {
          props.onClick()
        }
        let redirect = true
        if (
          e.button !== 0 ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.defaultPrevented
        ) {
          redirect = false
        }
        if (props.target && props.target.toLowerCase() !== `_self`) {
          redirect = false
        }

        if (window.gtag) {
          window.trackGoogleAnalyticsEvent("click", {
            event_category: "outbound",
            event_label: props.href,
            transport_type: "beacon",
            event_callback: function () {
              document.location = props.href
            },
          })
        } else {
          if (redirect) {
            document.location = props.href
          }
        }

        return false
      }}
    />
  )
}

OutboundLink.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
}
