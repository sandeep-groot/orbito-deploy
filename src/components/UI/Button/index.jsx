import React from "react"
import { _btn } from "./index.module.css"

const Button = ({ text, size, className, btnStyle, type }) => {
  const getSize = () => {
    switch (size) {
      case "large":
        return "py-md-3 px-md-5"
      case "small":
        return "py-md-2 px-md-4"
      default:
        return ""
    }
  }
  return (
    <button
      className={`btn btn-primary rounded-pill animated slideInLeft ${_btn} ${className} ${getSize()}`}
      style={{ ...btnStyle }}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button
