import React from "react"
import CookieConsent from "react-cookie-consent"
import "./cookieBanner.css"

export default function CookieBanner() {
  return (
    <CookieConsent
      disableStyles
      location="bottom"
      buttonText="I'm OK with analytics cookies"
      declineButtonText="Do not use analytics cookies"
      enableDeclineButton
      flipButtons
      onAccept={() => {
        window.trackGoogleAnalytics()
      }}
      cookieName="cdeiuk-analytics-enabled"
      expires={365}
      buttonClasses="button"
      declineButtonClasses="button"
      containerClasses="container"
      contentClasses="content"
      overlayClasses="overlay"
    >
      We would like to use cookies to send information about how our site is
      used to Google Analytics. We use this information to improve our site.
      <br />
      <br />
      Let us know if this is OK. We'll use a cookie to save your choice. You can{" "}
      <a href="/cookie-policy" style={{ color: "#fff" }}>
        read more about how we use cookies
      </a>{" "}
      before you choose. You can update your cookie consent preferences at any
      time by navigating to the{" "}
      <a
        href="/cookie-policy#update-your-cookie-settings"
        style={{ color: "#fff" }}
      >
        Cookie Policy
      </a>{" "}
      page.
    </CookieConsent>
  )
}
