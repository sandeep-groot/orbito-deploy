import React from "react"
import LinkButton from "../LinkButton"
import { _heading, banner_text } from "./index.module.css"

import carousel from "../../images/carousel-1.jpg"

const Banner = ({ title, heading, description, image }) => {
  return (
    <section id="app_banner" className="container-fluid p-0  mb-4">
      <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative">
          <img
            src="https://uiuxom.com/orbito/wp/wp-content/uploads/2022/06/1.1.jpg"
            alt={carousel}
          />

          {/* <StaticImage
            src={`../../images/carousel-1.jpg`}
            atl={`${image?.alt}`}
            layout="fullWidth"
          /> */}
          <div className="carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className={`col-12 col-lg-6 ${banner_text}`}>
                  {title && <p className={`title`}>{title}</p>}
                  {heading && <h1 className={`${_heading}`}>{heading}</h1>}
                  {description && (
                    <p
                      className="description"
                      style={{ color: `var(--banner-text-description)` }}
                    >
                      {description}
                    </p>
                  )}

                  <LinkButton size="large" url="" text="Read More" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
