import * as React from "react"
import Seo from "../components/seo"
import AboutUs from "../components/AboutUs"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const About = props => {
  return (
    <>
      <GatsbySeo
        title="About Us"
        description="A short description for About Us  page goes here."
      />
      <AboutUs
        imageUrl={
          "https://uiuxom.com/orbito/wp/version_01/wp-content/uploads/2022/06/4-2.jpg"
        }
        {...props}
      />
    </>
  )
}

// export const Head = () => <Seo title="About Us" />

export default About
