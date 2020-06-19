import React, { useState } from "react"
import { MdChevronRight } from "react-icons/md"
import { Collapse as ReactCollapse } from "react-collapse"
import style from "./collapse.module.css"

export default function Collapse({ children, label }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={style.wrapper}>
      <div
        className={style.toggle}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={ () => {
          setIsOpen(!isOpen)
        }}
      >
        <MdChevronRight
          size="1.5em"
          className={
            isOpen ? `${style.chevron} ${style.chevronOpen}` : style.chevron
          }
        />
        <span>{label}</span>
      </div>
      <ReactCollapse
        theme={{ collapse: style.collapse, content: style.content }}
        isOpened={isOpen}
      >
        {children}
      </ReactCollapse>
    </div>
  )
}

Collapse.defaultProps = {
  label: "Click here",
}
