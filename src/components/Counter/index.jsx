import React from "react"
import CardCounter from "../CardCounter"
import { background_count } from "./index.module.css"

const Counter = ({ ...props }) => {
  return (
    <div className="container-xxl container_expand mb-5">
      <div className="container">
        <div className={`${background_count} row  py-5`}>
          {Array.isArray(props?.counts) &&
            props?.counts?.map(count => {
              return (
                <CardCounter
                  key={count?.key}
                  sign={count?.sign}
                  count={count?.count}
                  unit={count?.unit}
                  title={count?.title}
                  name={count?.name}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Counter
