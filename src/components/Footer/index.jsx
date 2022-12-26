import { Link } from "gatsby"
import React from "react"
import logo_white from "../../images/logo_white.png"
import { TelephoneFill, EnvelopeFill, GeoAltFill } from "../../utils/icons"
import InputMail from "../InputMail"
import { Col, Container, Row } from "react-bootstrap"
import {
  text_footer_center,
  justify_content_footer,
  heading,
  text,
  footer_divider,
} from "./index.module.css"
import LinkButton from "../LinkButton"
import { StoreContext } from "../../utils/context"

const Footer = () => {
  const { services } = React.useContext(StoreContext)

  return (
    <footer className="container-fluid footer pt-5 footer_custom">
      <Container>
        <div className="pt-5">
          {/* Footer Section 1 */}
          <section
            className="d-flex justify-content-between align-items-center m-auto"
            style={{ maxWidth: "1350px" }}
          >
            <Container fluid>
              <Row>
                <Col>
                  <h3 className="title text-uppercase">WE LOVE WHAT WE DO</h3>
                  <h2
                    className="page_heading  mb-3"
                    style={{ color: "var(--text-heading)" }}
                  >
                    Let’s Create Something Together
                  </h2>
                  <p
                    className="description mt-2 mb-0"
                    style={{ color: "var(--text-description-three)" }}
                  >
                    Pure dolor in reprehenderit in voluptate velit essm dolore
                    eu fugiat
                  </p>
                </Col>
                <Col md="auto" className="align-self-center">
                  <LinkButton
                    className="mt-3 margin_con_btn"
                    size="small"
                    url="/contactUs"
                    text="Contact Us"
                  />
                </Col>
              </Row>
            </Container>
          </section>

          <div className={`${footer_divider}`}>
            <hr />
          </div>

          {/* Footer Section 2 */}

          <section className="row g-5 m-auto" style={{ maxWidth: "1350px" }}>
            <div className={`${text} col-lg-3 col-md-6`}>
              <img
                className="logo_img mb-4"
                src={logo_white}
                alt={logo_white}
              />
              <p className="mb-4">
                Duis aute irure dolor in reprehender it in{" "}
              </p>
              <p className="mb-2">
                <GeoAltFill />
                <span className="margin-text">20 Bordeshi, New York, USA</span>
              </p>
              <p className="mb-2">
                <TelephoneFill />
                <span className="margin-text">+123 456 789000</span>
              </p>
              <p className="mb-2">
                <EnvelopeFill />
                <span className="margin-text">hello@orbito.com</span>
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className={`${heading} text-light mb-4 mt-3`}>Services</h5>
              {services[0]?.map(link => {
                return (
                  <Link
                    key={link?.sUrl}
                    to={"/services/" + link?.sUrl}
                    className="btn btn-link mb-2"
                  >
                    {link?.sName}
                  </Link>
                )
              })}
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className={`${heading} text-light mb-4 mt-3`}>
                Useful Links
              </h5>
              <Link to="/about" className="btn btn-link mb-2">
                About Us
              </Link>

              <Link to="/team" className="btn btn-link mb-2">
                Team
              </Link>
              <Link to="/testimonials" className="btn btn-link mb-2">
                Testimonials
              </Link>
              <Link to="/faq" className="btn btn-link mb-2">
                FAQ
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 padding_zero">
              <h5 className={`${heading} text-light mb-4 mt-3`}>Newsletter</h5>
              <p className={`${text} mb-4`}>
                Duis aute irure dolor in reprehender it in voluptate.
              </p>

              <InputMail />
            </div>
          </section>

          <div className={`${footer_divider} pb-0`}>
            <hr />
          </div>
          <section
            className="row m-auto"
            style={{
              padding: "1rem 0 1rem 0",
              aligntems: "center",
              maxWidth: "1350px",
            }}
          >
            <div className="col-md-6 mb-2">
              <small className={`m-0 ${text_footer_center}`}>
                All rights reserved <span className="bold_span">Orbito © </span>
                {new Date().getFullYear()}
              </small>
            </div>
            <div className="col-md-6">
              <small className={`${justify_content_footer}`}>
                <Link className="btn btn-link mb-2 margins_btn_ft" to="">
                  Terms & Conditions
                </Link>
                <Link className="btn btn-link mb-2 margins_btn_ft" to="">
                  Privacy Policy
                </Link>
                <Link className="btn btn-link mb-2" to="">
                  Legal
                </Link>
              </small>
            </div>
          </section>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
