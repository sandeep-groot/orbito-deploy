import React from "react"
import { _description, heading, badge, bg_icon } from "./index.module.css"

const ProcessCard = ({ Icon, count, title, description }) => {
  return (
    <div className="col-md-6 col-lg-3 text-center">
      <div className="d-flex justify-content-center mb-3">
        <div
          className={`${bg_icon} d-flex justify-content-center align-items-center mb-3 position-relative`}
        >
          <p className={`${badge}`}>{count}</p>
          <Icon size={30} color={"#00c0ff"} />
        </div>
      </div>
      <h3 className={`card_heading mb-3 text-capitalize ${heading}`}>
        {title}
      </h3>
      <p className={`card_description ${_description} px-4 mb-4`}>{description}</p>
    </div>
  )
}

export default ProcessCard
