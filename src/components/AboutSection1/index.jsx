import * as React from "react"
import About_image_ld from "../../images/About_image_ld.png"
import { CalendarEvent, Briefcase } from "../../utils/icons"
import CardSm from "../CardSm"
import LinkButton from "../LinkButton"

import ProgressBarRound from "../ProgressBarRound"
import {
  _about,
  success_years,
  count,
  detail_progress,
  _desc,
} from "./index.module.css"

const AboutSection1 = () => {
  return (
    <section id="about_us2" className={`${_about} mt-4 margin_about_section`}>
      <div className={`container ${_about} `}>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className={`position-relative `}>
              <p className={`${success_years}`}>
                <span className={`${count}`}>12</span> Successful Years
              </p>
              <img
                className="img-fluid"
                src={About_image_ld}
                alt={About_image_ld}
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-6 px-md-5">
            <div>
              <p className="title">ABOUT US</p>
              <h1 className={`page_heading`}>
                A World Leading Digital Solution Provider
              </h1>
            </div>
            <div className="d-flex align-items-center mt-5">
              <ProgressBarRound progress={"40"} />

              <div>
                <p className={`${detail_progress}`}>
                  Mation ullamco laboris nisi ut alior in rep rehend er fugiat
                  nulla pariatur.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className={`${_desc} description`}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspicia tis unde omni od tempor incididunt ut labore.
              </p>
            </div>
            <div className="d-flex justify-content-between gap-2">
              <CardSm
                heading="Business Strategy"
                description="Bempor incididunt ut labore et dolore"
                Icon={CalendarEvent}
              />
              <CardSm
                heading="Marketing Solution"
                description="Bempor incididunt ut labore et dolore"
                Icon={Briefcase}
              />
            </div>
            <LinkButton
              className="mt-4 ml-4"
              size="large"
              url=""
              text="Read More"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection1
