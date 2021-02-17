import React from "react"
import { Cookies } from "react-cookie-consent"

export default class CookieForm extends React.Component {
  // A bit of an ugly hack to hard-code these here
  COOKIE_NAME = "cdeiuk-analytics-enabled"
  LEGACY_COOKIE_NAME = "cdeiuk-analytics-enabled-legacy"
  GA_COOKIES = ["_gid", "_ga", "_gat_gtag_UA_173229929_1"]
  GA_COOKIE_OPTIONS = {
    domain: ".dbckz.github.io",
  }
  CONSENT_COOKIE_OPTIONS = {
    expires: 365,
  }

  constructor() {
    super()
    this.state = {
      enableAnalytics: "false",
      showMessage: false,
      submitMessage: "",
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  onValueChange(event) {
    this.setState({
      enableAnalytics: event.target.value,
    })
  }

  formSubmit(event) {
    event.preventDefault()

    Cookies.set(
      this.COOKIE_NAME,
      this.state.enableAnalytics,
      this.CONSENT_COOKIE_OPTIONS
    )
    Cookies.set(
      this.LEGACY_COOKIE_NAME,
      this.state.enableAnalytics,
      this.CONSENT_COOKIE_OPTIONS
    )

    if (this.state.enableAnalytics === "false") {
      for (let i = 0; i < this.GA_COOKIES.length; i++) {
        Cookies.remove(this.GA_COOKIES[i], this.GA_COOKIE_OPTIONS)
      }
      this.setState({
        submitMessage:
          "Your settings were updated successfully. We will not use cookies to track your website use.",
      })
    } else {
      this.setState({
        submitMessage:
          "Your settings were updated successfully. We will use cookies to track your website use.",
      })
    }
    this.setState({ showMessage: true })
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              aria-label="useCookies"
              type="radio"
              value="true"
              checked={this.state.enableAnalytics === "true"}
              onChange={this.onValueChange}
            />
            Use cookies to track my website use
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              aria-label="doNotUseCookies"
              type="radio"
              value="false"
              checked={this.state.enableAnalytics === "false"}
              onChange={this.onValueChange}
            />
            Do not use cookies to track my website use
          </label>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
        <div>
          {this.state.showMessage && <h3>{this.state.submitMessage}</h3>}
        </div>
      </form>
    )
  }
}
