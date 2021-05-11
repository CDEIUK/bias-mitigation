import React, { useEffect } from "react"
import { boxedTree } from "d3-mitch-tree"
import "d3-mitch-tree/dist/css/d3-mitch-tree.min.css"
import "d3-mitch-tree/dist/css/d3-mitch-tree-theme-default.min.css"
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
      .getNodeSettings()
      .setSizingMode("size")
      .setBodyBoxHeight(100)
      .setBodyBoxWidth(250)
      .setTitleBoxHeight(0)
      .setTitleBoxWidth(0)
      // .setHorizontalSpacing(1000)
      .back()
      .on("nodeClick", function (event) {
        if (event.nodeDataItem.data.name === "RESULT") {
          event.continue = false
          window.location.href = event.nodeDataItem.data.link
          // } else if (event.nodeDataItem.data.id == 2) {
          // event.continue = false;
          // location.href = "https://www.yahoo.com";
        }
      })
      .initialize()
  }, [props.data])

  return <div id="visualisation"></div>
}
