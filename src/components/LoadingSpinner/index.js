import React from "react"
import { Spinner } from "react-bootstrap"
import { loadingSpinner } from "./index.module.css"

const LoadingSpinner = () => {
  return (
    <Spinner className={`${loadingSpinner}`} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default LoadingSpinner
