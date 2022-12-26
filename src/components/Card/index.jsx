import React from "react"
import { Link } from "gatsby"
import { ChevronRight } from "../../utils/icons"
import { read_more, readmore } from "./index.module.css"
import { useStaticQuery, graphql } from "gatsby"
import {
  Bezier,
  FileEarmarkText,
  BarChartLine,
  WindowDock,
  ShieldLock,
  CameraReels,
  Phone,
} from "../../utils/icons"

const Card = ({
  icon,
  heading,
  description,
  containerClass,
  containerStyle,
  linkText,
  linkTo
}) => {
  const getIcon = typeOfIcon => {
    switch (typeOfIcon) {
      case "Bezier":
        return <Bezier size={40} />
      case "FileEarmarkText":
        return <FileEarmarkText size={40} />

      case "BarChartLine":
        return <BarChartLine size={40} />
      case "WindowDock":
        return <WindowDock size={40} />

      case "ShieldLock":
        return <ShieldLock size={40} />
      case "Phone":
        return <Phone size={40} />
      case "CameraReels":
        return <CameraReels size={40} />

        break

      default:
        break
    }
  }
  return (
    <div
      className={`col-md-6  ${containerClass}`}
      style={{ ...containerStyle }}
    >
      <div className="h-100 bg-default padding_custom">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="icon_color">{getIcon(icon)}</div>
        </div>
        <h5 className={`card_heading text-default mb-4`}>{heading}</h5>

        <span className={`card_description`}>{description}</span>
        <div className="seperator clearfix mt-5"></div>
        <Link to={linkTo} className={`${readmore}`}>
          <span className={`${read_more}`}>{linkText}</span>
          <ChevronRight
            size={10}
            color="var(--theme-color)"
            style={{ marginTop: "3px" }}
          />
        </Link>
      </div>
    </div>
  )
}

export default Card
