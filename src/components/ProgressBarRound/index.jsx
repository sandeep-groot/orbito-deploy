import React from "react"
import {
  __progress,
  progress_circle,
  progress_circle_back,
  progress_text,
  bar_progress,
  progress_circle_prog,
} from "./index.module.css"

/**
 *
 * @param {number} progress integer value for the progress count
 * @returns a rounded/circle progress bar component
 */

const ProgressBarRound = ({ progress = 0 }) => {
  const getProgressCount = percent => {
    return (+percent / 100) * 280
  }
  return (
    <div className={bar_progress}>
      <div className={__progress}>
        <svg className={progress_circle} width="100px" height="100px">
          <circle
            className={progress_circle_back}
            cx="50"
            cy="50"
            r="44"
          ></circle>
          <circle
            className={progress_circle_prog}
            style={{
              strokeDasharray: `${getProgressCount(progress)} 999`,
            }}
            cx="50"
            cy="50"
            r="44"
          ></circle>
        </svg>
        <div className={progress_text} data-progress="0">
          {progress}%
        </div>
      </div>
    </div>
  )
}

export default ProgressBarRound
