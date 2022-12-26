import React from "react"
import { EnvelopeFill } from "../../utils/icons"
import { footer_input } from "./index.module.css"

const InputMail = () => {
  return (
    <div className="w-100 position-relative">
      <input
        className={` ${footer_input} form-control  bg-white border-secondary w-100 padding_input ps-4 pe-5`}
        type="text"
        placeholder="Your email here"
        style={{ fontSize: "18px" }}
      />

      <button
        type="button"
        className="btn btn-link position-absolute"
        style={{ top: "13px", right: "15px" }}
      >
        <EnvelopeFill color={"#868b9b"} size={20} />
      </button>
    </div>
  )
}

export default InputMail
