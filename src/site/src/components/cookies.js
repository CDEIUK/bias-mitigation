import React from "react"
import CookieConsent from "react-cookie-consent"

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      enableDeclineButton
      flipButtons
      declineButtonText="Decline"
      style={{ background: "#262445" }}
      cookieName="gdpr-analytics-enabled">
      TODO: Add cookie policy info here
    </CookieConsent>
  )
}
