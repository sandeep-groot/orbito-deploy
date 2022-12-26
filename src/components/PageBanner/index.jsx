import * as React from "react"
import { heading, banner_text } from "./index.module.css"

import { graphql, StaticQuery } from "gatsby"
import Breadcrumbs from "../Breadcrumbs"

const PageBanner = props => {
  const { imageUrl, pageHeading } = props

  return (
    <StaticQuery
      query={graphql`
        query ImageQuery {
          file(relativePath: { eq: "carousel-2.jpg" }) {
            childImageSharp {
              # Specify a fluid image and fragment
              # The default maxWidth is 800 pixels
              fluid(maxHeight: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <section id="app_banner" className="container-fluid p-0 ">
          <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative custom_carousel">
              <img
                src={
                  imageUrl ||
                  "https://uiuxom.com/orbito/wp/version_01/wp-content/uploads/2022/06/4-2.jpg"
                }
                alt={"Banner "}
              />

              <div className="carousel-inner about_cr">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className={`col-12 col-lg-6 ${banner_text}`}>
                      <h1 className={`${heading} `}>{pageHeading}</h1>

                      <Breadcrumbs {...props} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default PageBanner
