import React from "react"
import PageBanner from "../PageBanner"
import {
  description_service,
  description_service_text,
  description_service_text2,
  Portfolio_images,
  heading_images_text,
  button_services,
  project_det,
  project_det_head,
  project_det_text,
  margin_cs_tick,
} from "./index.module.css"
import QuoteForm from "../ServiceDetailPage/ServiceDetailComponents/QuoteForm"
import { Check2 } from "../../utils/icons"

import ResultCard from "../ServiceDetailPage/ServiceDetailComponents/ResultCard"
import Portfolio_image4 from "../../images/portfolio_details1.jpg"
import Portfolio_image5 from "../../images/portfolio_details2.jpg"
import Portfolio_image6 from "../../images/portfolio_details3.jpg"

const CaseStudyDetailPage = props => {
  const results = [
    {
      text: "Prodcut sales growing per Month",
      count: "90%",
      unit: "",
    },
    {
      text: "Prodcut Sales Growing Per Month",
      count: "80%",
      unit: "",
    },
    {
      text: "Prodcut Sales Growing Per Month",
      count: "8K",
      unit: "",
    },
  ]
  return (
    <>
      <PageBanner
        pageHeading={<span>Branding for the ABC Corporation</span>}
        {...props}
      />

      <div className="container py-5">
        <div className="row">
          {/* Right Section */}
          <div className="col-md-8 mt-4">
            <div className="pe-5">
              <h3 className={`${description_service}`}>Project Description</h3>
              <p className={`${description_service_text2} mt-4`}>
                Ket labore et dolore magna aliqua. Odiko khono bhulho yeja ytumi
                opora dhnio najanina konod inbether prodi pzele.
              </p>
              <p className={`${description_service_text} mt-4`}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
            {/* Service Elements*/}

            <div className="mt-5 pe-5">
              <h3 className={`${description_service}`}>Problems</h3>
              <p className={`${description_service_text} mt-4`}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris tetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqu pteur sint occaecat cup idatat
                non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et qexpl abo.
              </p>
            </div>
            <div className="mt-5 pe-5">
              <h3 className={`${description_service}`}>Solutions</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mt-4">
                    <Check2 />
                    <p className={`${description_service_text} ms-3 mb-0`}>
                      Full business control
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <Check2 />
                    <p className={`${description_service_text} ms-3 mb-0`}>
                      User dashboard & analytics
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <Check2 />
                    <p className={`${description_service_text} ms-3 mb-0`}>
                      Custom reporting
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <Check2 />
                    <p className={`${description_service_text} ms-3 mb-0`}>
                      Regular update monitoring
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <Check2 />
                    <p className={`${description_service_text} ms-3 mb-0`}>
                      24/7 priority support
                    </p>
                  </div>
                </div>
                <div className={`${margin_cs_tick} col-md-6`}>
                  <div className="d-flex align-items-center mt-4">
                    <Check2 />
                    <p className={`${description_service_text} ms-3 mb-0`}>
                      Full business control
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <Check2 />
                    <p className={`${description_service_text} ms-3 mb-0`}>
                      User dashboard & analytics
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <Check2 />
                    <p className={`${description_service_text} ms-3 mb-0`}>
                      Custom reporting
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <Check2 />
                    <p className={`${description_service_text} ms-3 mb-0`}>
                      Regular update monitoring
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <Check2 />
                    <p className={`${description_service_text} ms-3 mb-0`}>
                      24/7 priority support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 pe-5">
              <h3 className={`${description_service}`}>Results</h3>
              <p className={`${description_service_text} mt-4`}>
                Haste inim veniam, quis nostrud exercitation ullamco laboris
                tetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqu pteur sint occaecat cupidatat non
                proident, sunt in culpa qui offic dekho gaite.
              </p>
            </div>
            <div className="row">
              {Array?.isArray(results) &&
                results?.map(result => {
                  return (
                    <ResultCard
                      text={result?.text}
                      count={result?.count}
                      unit={result?.unit}
                    />
                  )
                })}
            </div>
          </div>

          {/* Left Section */}
          <div className="col-md-4 mt-4">
            <div className={`${button_services}`}>
              <div className={`${project_det} mb-4`}>
                <p className={`${project_det_head} mb-1`}>Project Type</p>
                <p className={`${project_det_text}`}>UI/UX Design</p>
              </div>
              <div className={`${project_det} mb-4`}>
                <p className={`${project_det_head} mb-1`}>Client</p>
                <p className={`${project_det_text}`}>ABC Corporation</p>
              </div>
              <div className={`${project_det} mb-4`}>
                <p className={`${project_det_head} mb-1`}>Duration</p>
                <p className={`${project_det_text}`}>3 months</p>
              </div>
              <div className={`${project_det}`}>
                <p className={`${project_det_head} mb-1`}>Task</p>
                <p className={`${project_det_text}`}>UI/UX Design, Branding</p>
              </div>
            </div>
            {/* Quote Form
             *****************************************************/}
            <QuoteForm />
          </div>
        </div>
        <div className="row mt-5">
          <h2 className={`${heading_images_text}`}>You Also Might Like</h2>
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
              src={Portfolio_image4}
              alt={Portfolio_image4}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudyDetailPage
