import React from "react"
import { link_button } from "./index.module.css"

const LinkAction = ({ text, color, onClick, Icon }) => {
  const getColor = () => {
    switch (color) {
      case "danger":
        return "var(--theme-color)"

      default:
        return "var(--theme-color-two)"
    }
  }
  return (
    <button
      className={`btn btn-link ${link_button}`}
      style={{ textDecoration: "none", color: getColor() }}
      type="button"
      onClick={onClick}
    >
      <Icon />
    </button>
  )
}

export default LinkAction
