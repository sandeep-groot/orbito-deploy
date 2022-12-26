import React from "react"
import { PersonCheck, Headset, ShieldCheck } from "../../utils/icons"
import CardRoundIcons from "../CardRoundIcon"

const WhyUs = ({ containerStyle, containerClass }) => {
  return (
    <section>
      <div
        id="why_us"
        className={`container-xxl container_expand pb-5 ${containerClass}`}
        style={{ ...containerStyle }}
      >
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="title">WHY CHOOSE US</p>
              <h1 className={`page_heading mb-4 padding-right_us`}>
                We Provide Solutions to Engage Customers
              </h1>
              <p className={`description padding-right_us`}>
                Mation ullamco laboris nisi ut aliquip exea core dolor in repre
                hender fugiat nulla pariatur.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row mb-5">
                <CardRoundIcons
                  Icon={PersonCheck}
                  heading={"Developer friendly design"}
                  description={
                    "Bempor incididunt ut labore et dolor magna aliqus aute irure dolor in rep rehenderit in voluptate velit"
                  }
                />
                <CardRoundIcons
                  Icon={Headset}
                  heading={"Lifetime Support"}
                  description={
                    "Bempor incididunt ut labore et dolor magna aliqus aute irure dolor in rep rehenderit in voluptate velit"
                  }
                />
                <CardRoundIcons
                  Icon={ShieldCheck}
                  heading={"Secure payments"}
                  description={
                    "Bempor incididunt ut labore et dolor magna aliqus aute irure dolor in rep rehenderit in voluptate velit"
                  }
                />
                <CardRoundIcons
                  Icon={ShieldCheck}
                  heading={"Lifetime Support"}
                  description={
                    "Bempor incididunt ut labore et dolor magna aliqus aute irure dolor in rep rehenderit in voluptate velit"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
