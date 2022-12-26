import React from "react"

const AdminButton = ({
  onButtonClick,
  title,
  Icon,
  type = "button",
  outline,
}) => {
  return (
    <button
      className={`btn ${outline ? "btn-outline-primary" : "btn-primary"}`}
      id="button_tab"
      data-bs-toggle="tab"
      type={type}
      onClick={onButtonClick}
    >
      {Icon && <Icon />}
      {title}
    </button>
  )
}

export default AdminButton
