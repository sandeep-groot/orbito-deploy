import React from "react"
import Img from "gatsby-image"
import { image } from "./index.module.css"

const AppImageCard = ({ sources, alt }) => {
  return <Img fluid={sources} alt={alt} className={`${image}`} />
}

export default AppImageCard
