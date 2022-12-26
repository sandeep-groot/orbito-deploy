import React from "react"
import { ArrowRight } from "../../../../utils/icons"
import { _description } from "./index.module.css"

const Outcome = ({ description }) => {
  return (
    <div className="d-flex align-items-start mt-2">
      <ArrowRight />
      <p className={`${_description} ms-3 mb-0`}>{description}</p>
    </div>
  )
}

export default Outcome
