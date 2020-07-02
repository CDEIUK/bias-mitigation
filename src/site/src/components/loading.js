import React from "react"
import Loader from "react-loader-spinner"

const spinnerStyle = { textAlign: "center" }

export default function Loading() {
  return (
    <div style={spinnerStyle}>
      <Loader
        type="ThreeDots"
        color="#edc946"
        height={75}
        width={75}
        timeout={10000} // 10sec
      />
    </div>
  )
}
