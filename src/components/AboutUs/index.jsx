import React from "react"
import AboutSection1 from "../AboutSection1"
import PageBanner from "../PageBanner"
import Testimonial2 from "./AboutUsComponents/Testimonial2"
import Team from "../Team"
import Counter from "../Counter"
import AboutSkills from "../AboutSkills"
import Brands from "../Brands"

const AboutUS = props => {
  // const path = props?.location?.pathname?.split("/")

  const counts = [
    {
      key: "0",
      count: "120",
      sign: "+",
      unit: "",
      title: "Total",
      name: "Countries",
    },
    {
      key: "2",
      count: "2",
      unit: "k",
      title: "Worldwide",
      name: "Customers",
    },
    {
      key: "3",
      count: "10",
      unit: "k",
      title: "Completed",
      name: "Projects",
    },
  ]
  return (
    <>
      <PageBanner pageHeading={"About Us"} {...props} />

      <AboutSection1 />

      <Counter counts={counts} />

      <AboutSkills />

      <Team />

      <Testimonial2 />

      <Brands />
    </>
  )
}

export default AboutUS
