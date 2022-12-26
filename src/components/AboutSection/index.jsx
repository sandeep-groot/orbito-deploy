import React from "react"
import About_image from "../../images/About_image.png"
import Video_image from "../../images/video_img.jpg"
import { CalendarEvent, Briefcase } from "../../utils/icons"
import CardSm from "../CardSm"
import LinkButton from "../LinkButton"
import ProgressBar from "../ProgressBar"
import ProgressBarRound from "../ProgressBarRound"
import {
  _about,
  _about_border_radius,
  success_years,
  count,
  detail_progress,
  _desc,
} from "./index.module.css"

const AboutSection = () => {
  return (
    <section id="about_us" className={`${_about} mt-5 margin_about_section`}>
      <div className={`container ${_about} `}>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className={`position-relative`}>
              <p className={`${success_years}`}>
                <span className={`${count}`}>12</span> Successful Years
              </p>
              <img className="img-fluid" src={About_image} alt={About_image} />
            </div>
          </div>
          <div className="col-md-12 col-lg-6 px-md-5">
            <div>
              <p className="title">ABOUT US</p>
              <h1 className={`page_heading padding_right_all`}>
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
        <div className="row margin_topav">
          <div className="col-md-12 col-lg-6 p-0">
            <div className="margin_minus_20">
              <div className="aboutVideo">
                <img
                  className="img-fluid img_wd_res"
                  src={Video_image}
                  alt={Video_image}
                />
              </div>
            </div>
          </div>
          <div
            className={`col-md-12 col-lg-6 section_bg py-5 margin_minus_10 ${_about_border_radius}`}
          >
            <div className="about_info about_Video_padding">
              <p className="title">WE MAKE BUSINESS</p>
              <h1
                className={`page_heading section_heading_color padding_right_all`}
              >
                We Work Hard to Grow Your Business
              </h1>
              <p className="description mt-4 section_description_color">
                Mation ullamco laboris nisi ut aliquip ex ea corend eoesir
                fugiat nulla pariatur.
              </p>

              <ProgressBar title="Success Rate" progress={85} />
              <ProgressBar title="Returning Customer" progress={85} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
