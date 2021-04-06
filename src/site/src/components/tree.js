import React, { useEffect } from "react"
import { boxedTree } from "d3-mitch-tree"
import "d3-mitch-tree/dist/css/d3-mitch-tree-theme-default.min.css"
import "d3-mitch-tree/dist/css/d3-mitch-tree.min.css"
import "./tree.css"

export default function Tree(props) {
  useEffect(() => {
    if (!props.data) {
      return
    }
    new boxedTree()
      .setData(props.data)
      .setAllowFocus(false)
      .setElement(document.getElementById("visualisation"))
      .setIdAccessor(function (data) {
        return data.id
      })
      .setChildrenAccessor(function (data) {
        return data.children
      })
      .setBodyDisplayTextAccessor(function (data) {
        return data.description
      })
      .setTitleDisplayTextAccessor(function (data) {
        return data.name
      })
      .initialize()
  }, [props.data])

  return <div id="visualisation"></div>
}
