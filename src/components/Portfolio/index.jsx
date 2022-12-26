import React from "react"
import Portfolio_image1 from "../../images/portfolio_image1.jpg"
import Portfolio_image2 from "../../images/portfolio_image2.jpg"
import Portfolio_image3 from "../../images/portfolio_image3.jpg"
import { Portfolio_images } from "./index.module.css"

const Portfolio = () => {
  return (
    <section
      id="offered_services"
      className="container-xxl container_expand py-5"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <p className="title text-center">PORTFOLIO</p>
            <h1 className={`page_heading text-center mb-4`}>
              Check Our Amazing Works
            </h1>
            <p className={`description text-center`}>
              Mation ullamco laboris nisi ut aliquip exea core dolor in repre
              hender fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              className={`img-fluid ${Portfolio_images}`}
              src={Portfolio_image1}
              alt={Portfolio_image1}
            />
          </div>
          <div className="col-md-4 text-center">
            <img
              className={`img-fluid ${Portfolio_images}`}
              src={Portfolio_image2}
              alt={Portfolio_image2}
            />
          </div>
          <div className="col-md-4 text-center">
            <img
              className={`img-fluid ${Portfolio_images}`}
              src={Portfolio_image3}
              alt={Portfolio_image3}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
