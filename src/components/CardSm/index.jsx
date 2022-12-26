import React from "react"
import { txt_spacing } from "./index.module.css"

const CardSm = ({ Icon, heading, description }) => {
  return (
    <div className="d-flex">
      <div className={`icon_color`}>
        <Icon size={32} />
      </div>
      <div>
        <h5 className={`card_heading ${txt_spacing}`}>{heading}</h5>
        <p className={`card_description ${txt_spacing} `}>{description}</p>
      </div>
    </div>
  )
}

export default CardSm
