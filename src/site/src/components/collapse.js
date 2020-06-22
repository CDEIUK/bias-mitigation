import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "./accordion.css"

export default function Collapse({ children, label }) {
  return (
    <Accordion allowZeroExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>{label}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>{children}</AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}
