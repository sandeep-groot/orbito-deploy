import React from "react"
import { _description, icon_heading } from "./index.module.css"

const ElementCard = ({ Icon, title, description }) => {
  return (
    <div className="col-md-6 mt-4">
      <div className="d-flex align-items-center">
        <Icon />
        <h5 className={`${icon_heading} ms-3 mb-0`}>{title}</h5>
      </div>
      <p className={`${_description} mt-4`}>{description}</p>
    </div>
  )
}

export default ElementCard
