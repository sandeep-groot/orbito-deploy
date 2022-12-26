import React from "react"
import { bg_icon } from "./index.module.css"

const CardRoundIcons = ({ Icon, heading, description }) => {
  return (
    <div className="col-md-6 col-sm-12">
      <div
        className={`${bg_icon} d-flex justify-content-center align-items-center mb-3`}
      >
        <Icon size={30} color={"#fff"} />
      </div>
      <h3 className={`card_heading mb-3 text-capitalize`}>{heading}</h3>
      <p className={`card_description mb-3`}>{description}</p>
    </div>
  )
}

export default CardRoundIcons
