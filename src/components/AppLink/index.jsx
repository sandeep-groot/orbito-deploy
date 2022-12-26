import React from "react"
import { tab_buttons2, _active } from "./index.module.css"
import { navigate } from "gatsby"

const AppLink = props => {
  const { title, active, link } = props

  return (
    <button
      className={`btn btn-primary ${tab_buttons2} mb-2 ${active && _active}`}
      id="button_tab"
      data-bs-toggle="tab"
      onClick={() => navigate('/services/' + link)}
      type="button"

    >
      {title}
    </button>
  )
}

export default AppLink
