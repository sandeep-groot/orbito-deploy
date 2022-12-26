import React from "react"
import { client_count, client_numbers } from "./index.module.css"

const CardCounter = props => {
  const { count, unit, sign, title, name } = props

  return (
    <div className="col-md-4 mt-4 mb-4">
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <p className={`${client_count} mb-0`}>
            {`${count}`}
            {unit && <span className="text-uppercase">{unit}</span>}

            {sign && <sup>{sign}</sup>}
          </p>
        </div>
        <div>
          <p className={`${client_numbers} mb-0`}>{title}</p>
          <p className={`${client_numbers} mb-0`}>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default CardCounter
