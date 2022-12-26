import * as React from "react"
import ProgressBar from "../ProgressBar"
import {
  _about,
  progressStyle,
  labelStyle,
  percentStyle,
  padding_skills_abt,
} from "./index.module.css"

const AboutSkills = () => {
  return (
    <section id="skills" className={`${_about} margin_skills_section`}>
      <div className={`container pb-5 mb-5 ${_about} `}>
        <div className="row">
          <div className={`col-md-12 col-lg-6 ${padding_skills_abt} `}>
            <p className="title">OUR SKILLS</p>
            <h1 className={`page_heading mb-4`}>
              We Provide Solutions to Engage Customers
            </h1>
            <p className={`description `}>
              Mation ullamco laboris nisi ut aliquip exea core dolor in
              reprehend erfu giat nulla pariatur.
            </p>
          </div>
          <div className="col-md-12 col-lg-6 px-md-2">
            <ProgressBar
              title="Business Analysis"
              progress={70}
              progressStyle={progressStyle}
              labelStyle={labelStyle}
              percentStyle={percentStyle}
            />
            <ProgressBar
              title="Marketing Strategy"
              progress={90}
              progressStyle={progressStyle}
              labelStyle={labelStyle}
              percentStyle={percentStyle}
            />
            <ProgressBar
              title="Final Chart"
              progress={60}
              progressStyle={progressStyle}
              labelStyle={labelStyle}
              percentStyle={percentStyle}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSkills
