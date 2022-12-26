import React from "react"
import { result_box, percent_result, percent_text } from "./index.module.css"

const ResultCard = ({ text, count, unit }) => {
  return <div className="col-md-4 mt-4">
    <div className={`${result_box} text-center`}>
      <h1 className={`${percent_result}`}>{count}{unit}</h1>
      <p className={`${percent_text} text-capitalize`}>
        {text}
      </p>
    </div>
  </div>
}

export default ResultCard
