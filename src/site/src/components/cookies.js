import React from "react"
import CookieConsent from "react-cookie-consent"

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      enableDeclineButton
      flipButtons
      onAccept={() => {
        window.trackGoogleAnalytics()
      }}
      declineButtonText="Decline"
      style={{ background: "#909090" }}
      cookieName="cdeiuk-analytics-enabled"
      expires={365}
    >
      We would like to use cookies to send information about how our site is
      used to Google Analytics. We use this information to improve our site.
      <br />
      <br />
      Let us know if this is OK. We'll use a cookie to save your choice. You can{" "}
      <a href="/cookie-policy" style={{ color: "#ffffff" }}>
        read more about how we use cookies
      </a>{" "}
      before you choose.
    </CookieConsent>
  )
}
