import React from "react"
import { __progress, bar, percentage, percent_label } from "./index.module.css"

/**
 *
 * @param {number} progress integer value for the progress count
 * @returns  progress bar component
 */

const ProgressBar = ({ progress = 0, title, progressStyle,barStyle, labelStyle, percentStyle }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <p className={`${percent_label} ${labelStyle} mb-0`}>{title}</p>
        <p className={`${percentage} ${percentStyle} mb-0`}>{progress}%</p>
      </div>
      <div>
        <div className={`${__progress} ${progressStyle}`}>
          <div className={`${bar} ${barStyle}`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
