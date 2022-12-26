import { Link } from "gatsby"
import React, { FC } from "react"
import { _btn } from "./index.module.css"

type linkBtnType = {
  url?: string
  text: string
  className?: string
  size?: string
  linkStyle?: any
}

const LinkButton: FC<linkBtnType> = ({
  url = "",
  text,
  className,
  size,
  linkStyle,
}) => {
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
    <Link
      to={`${url}`}
      className={`btn btn-primary rounded-pill animated slideInLeft ${_btn} ${className} ${getSize()}`}
      style={{ ...linkStyle }}
    >
      {text}
    </Link>
  )
}

export default LinkButton
