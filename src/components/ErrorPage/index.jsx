import React from "react"
import Breadcrumbs from "../Breadcrumbs"
import LinkButton from "../LinkButton"
import { heading, banner_text } from "./index.module.css"
const ErrorPage = props => {
  return (
    <section id="app_banner" className="container-fluid p-0 ">
      <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative custom_carousel">
          <img
            src={
              "https://uiuxom.com/orbito/wp/version_01/wp-content/uploads/2022/06/6.jpg"
            }
            alt={"Banner "}
          />

          <div className="carousel-inner about_cr">
            <div className="container">
              <div className="row justify-content-start">
                <div className={`col-12 col-lg-6 ${banner_text}`}>
                  <h1 className={`${heading}`}>404</h1>
                  <Breadcrumbs {...props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 py-5">
            <div className="text-center py-2">
              <h1 className="heading_error">404</h1>
              <p className="error_text">
                The link you folowed probably broken, or the page has been
                removed...
              </p>
              <form className="search_input">
                <input
                  type="search"
                  className="input_height"
                  value=""
                  placeholder="Type and hit Enter..."
                />
                <button className="submit_sr" type="submit">
                  <i className="orbito-search1"></i>
                </button>
              </form>
              <LinkButton
                className="mt-4 mb-5"
                size="large"
                url=""
                text="Return to home"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
