import React, { useEffect, useState } from "react"
import { ArrowUp } from "../../utils/icons"
import { back_to_top } from "./index.module.css"

const ScrollBackToTop = () => {
  const [show, setShow] = useState(false)

  const toggleScrollVisibility = () => {
    let scrolled
    if (window !== "undefined") {
      scrolled = document.documentElement.scrollTop
    }

    if (scrolled > 300) {
      setShow(true)
    } else if (scrolled <= 300) {
      setShow(false)
    }
  }

  useEffect(() => {
    let subsScroll
    if (window !== "undefined") {
      window.scroll(0, 0)
      subsScroll = window.addEventListener("scroll", toggleScrollVisibility)
    }

    return () => {
      if (window !== "undefined") {
        window.removeEventListener("scroll", subsScroll)
      }
    }
  }, [])

  const ScrollToTopHandler = () => {
    if (window !== "undefined") {
      window.scroll(0, 0)
    }
  }
  return (
    <button
      className={`btn btn-lg btn-primary btn-lg-square rounded-circle ${back_to_top}`}
      style={{ top: `${show ? "90vh" : "105vh"}` }}
      onClick={ScrollToTopHandler}
    >
      <ArrowUp color="#fff" size={20} />
    </button>
  )
}

export default ScrollBackToTop
