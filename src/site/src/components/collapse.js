import React, { useState } from "react"
import { MdChevronRight } from "react-icons/md"
import { Collapse as ReactCollapse } from "react-collapse"
import style from "./collapse.module.css"

export default function Collapse({ children, label }) {
  const [collapsed, setCollapsed] = useState(false)
  const defaultChevronStyle = { transition: "transform 300ms ease-in-out" }
  return (
    <div className={style.wrapper}>
      <div
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => setCollapsed(!collapsed)}
        role="button"
      >
        <MdChevronRight
          size="1.5em"
          style={
            collapsed
              ? { transform: "rotate(90deg)", ...defaultChevronStyle }
              : defaultChevronStyle
          }
        />
        <span>{label}</span>
      </div>
      <ReactCollapse
        theme={{ collapse: style.collapse, content: style.content }}
        isOpened={collapsed}
      >
        {children}
      </ReactCollapse>
    </div>
  )
}

Collapse.defaultProps = {
  label: "Click here",
}
