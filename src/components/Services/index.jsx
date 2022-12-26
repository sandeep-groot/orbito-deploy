import React from "react"
import {
  Bezier,
  CameraReels,
  BarChartLine,
  WindowDock,
} from "../../utils/icons"
import Card from "../../components/Card"
import { text_inner, service_heading } from "./index.module.css"

const Services = () => {
  return (
    <section
      id="offered_services"
      className="container-xxl container_expand py-5"
    >
      <div className="container">
        <p className={`title secSubTitle text-center`}>WHAT WE OFFER</p>
        <h2
          className={`page_heading text-center ${text_inner} ${service_heading}`}
        >
          We Create Your Amazing Digital Experience
        </h2>
        <div className="row g-4">
          <Card
            icon={"WindowDock"}
            heading={"Web Development"}
            linkTo={"/services/web"}
            description={
              "Ture dolor in reprehe ndiit in voluptate velit ese ism dolore eu fugiat nulla pari otore golatur."
            }
            containerClass={"col-lg-3"}
            linkText="Read More"
          />

          <Card
            icon={"Bezier"}
            heading={"Graphic Design"}
            description={
              "Ture dolor in reprehe ndiit in voluptate velit ese ism dolore eu fugiat nulla pari otore golatur."
            }
            containerClass={"col-lg-3"}
            linkText="Read More"
            linkTo={"/services/graphics"}
          />
          <Card
            icon={"CameraReels"}
            heading={"Online Security"}
            linkTo={"/services/online"}
            description={
              "Ture dolor in reprehe ndiit in voluptate velit ese ism dolore eu fugiat nulla pari otore golatur."
            }
            containerClass={"col-lg-3"}
            linkText="Read More"
          />
          <Card
            icon={"BarChartLine"}
            heading={"Digital Marketing"}
            linkTo={"/services/digital"}
            description={
              "Ture dolor in reprehe ndiit in voluptate velit ese ism dolore eu fugiat nulla pari otore golatur."
            }
            containerClass={"col-lg-3"}
            linkText="Read More"
          />
        </div>
      </div>
    </section>
  )
}

export default Services
