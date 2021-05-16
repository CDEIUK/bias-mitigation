import React, { useEffect } from "react"
import { boxedTree } from "d3-mitch-tree"
import "d3-mitch-tree/dist/css/d3-mitch-tree.min.css"
import "d3-mitch-tree/dist/css/d3-mitch-tree-theme-default.min.css"
import "./tree.css"

function updateTreeClasses(treePlugin) {
  treePlugin
    .getPanningContainer()
    .selectAll("g.node")
    .attr("class", function (data, index, arr) {
      console.log(data)
      if (data.data.name === "RESULT") {
        var depthClass = "depth-result"
        console.log("1")
      } else if (data.depth % 2 == 0) {
        var depthClass = "depth-even"
        console.log("2")
      } else {
        var depthClass = "depth-odd"
        console.log("3")
      }
      // var depthClass = "depth-" + data.depth;
      var existingClasses = this.getAttribute("class")
      if (!existingClasses) return depthClass
      var hasDepthClassAlready =
        (" " + existingClasses + " ").indexOf(" " + depthClass + " ") > -1
      if (hasDepthClassAlready) return existingClasses
      return existingClasses + " " + depthClass
    })
}

export default function Tree(props) {
  useEffect(() => {
    if (!props.data) {
      return
    }

    var treePlugin = new boxedTree()
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

    // Override the core update method,
    // so it'd call our custom update method
    treePlugin.update = function (nodeDataItem) {
      // Call the original update method
      this.__proto__.update.call(this, nodeDataItem)
      updateTreeClasses(this)
    }

    updateTreeClasses(treePlugin)
  }, [props.data])

  return <div id="visualisation"></div>
}
