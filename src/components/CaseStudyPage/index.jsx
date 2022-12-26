import React from "react"
import PageBanner from "../PageBanner"
import {
  pagination,
  numbering,
  numbering_1,
  Portfolio_images,
  size_all,
  size_all_clr,
  flex_property,
} from "./index.module.css"
import { ChevronRight } from "../../utils/icons"
import Portfolio_image4 from "../../images/portfolio_details1.jpg"
import Portfolio_image5 from "../../images/portfolio_details2.jpg"
import Portfolio_image6 from "../../images/portfolio_details3.jpg"

const CaseStudyPage = props => {
  return (
    <>
      <PageBanner pageHeading={<span>Case Study</span>} {...props} />
      <section id="case_section" className="mb-md-0">
        <div className="container-xxl container_expand mb-sm-0 mb-md-5">
          <div className="container">
            <div className="row">
              <div className={`${flex_property} mb-4 mt-5`}>
                <p className={`${size_all_clr}`}>All</p>
                <p className={`${size_all}`}>Business</p>
                <p className={`${size_all}`}>Photography</p>
                <p className={`${size_all}`}>Development</p>
                <p className={`${size_all}`}>Web Design</p>
              </div>
              <div className="col-md-4 text-center mb-4">
                <img
                  className={`img-fluid ${Portfolio_images}`}
                  src={Portfolio_image4}
                  alt={Portfolio_image4}
                />
              </div>
              <div className="col-md-4 text-center mb-4">
                <img
                  className={`img-fluid ${Portfolio_images}`}
                  src={Portfolio_image5}
                  alt={Portfolio_image5}
                />
              </div>
              <div className="col-md-4 text-center mb-4">
                <img
                  className={`img-fluid ${Portfolio_images}`}
                  src={Portfolio_image6}
                  alt={Portfolio_image6}
                />
              </div>
              <div className="col-md-4 text-center mb-4">
                <img
                  className={`img-fluid ${Portfolio_images}`}
                  src={Portfolio_image5}
                  alt={Portfolio_image5}
                />
              </div>
              <div className="col-md-4 text-center mb-4">
                <img
                  className={`img-fluid ${Portfolio_images}`}
                  src={Portfolio_image6}
                  alt={Portfolio_image6}
                />
              </div>
              <div className="col-md-4 text-center mb-4">
                <img
                  className={`img-fluid ${Portfolio_images}`}
                  src={Portfolio_image4}
                  alt={Portfolio_image4}
                />
              </div>
              <div className="col-md-4 text-center mb-4">
                <img
                  className={`img-fluid ${Portfolio_images}`}
                  src={Portfolio_image5}
                  alt={Portfolio_image5}
                />
              </div>
              <div className="col-md-4 text-center mb-4">
                <img
                  className={`img-fluid ${Portfolio_images}`}
                  src={Portfolio_image4}
                  alt={Portfolio_image4}
                />
              </div>
              <div className="col-md-4 text-center mb-4">
                <img
                  className={`img-fluid ${Portfolio_images}`}
                  src={Portfolio_image6}
                  alt={Portfolio_image6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-5">
        <div className="col-md-12">
          <div className="row">
            <div className={`${pagination} d-flex justify-content-center mb-5`}>
              <p
                className={`${numbering_1} d-flex justify-content-center align-items-center`}
              >
                1
              </p>
              <p
                className={`${numbering} d-flex justify-content-center align-items-center`}
              >
                2
              </p>
              <div
                className={`${numbering} d-flex justify-content-center align-items-center`}
              >
                <ChevronRight size={18} color="#00c0ff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudyPage
