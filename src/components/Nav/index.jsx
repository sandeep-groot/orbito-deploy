import { Link } from "gatsby"
import * as React from "react"
import logo from "../../images/logo/logo.png"
import { TelephoneFill } from "../../utils/icons"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { call_help, phone_btn } from "./index.module.css"
import { useEffect } from "react"
import {
  serviceRoute,
  serviceDetailRoutes,
  caseStudyRoute,
  caseStudyDetailRoutes,
  articleRoute,
  articleDetailRoutes,
} from "../../../config/route"
import { getArrayFromObject } from "../../utils/converters"
import { StoreContext } from "../../utils/context"

/* globals ROUTES */

const NavBar = props => {
  const { path, appLinks, location } = props

  // Creating Service Links
  // **********************
  const { services } = React.useContext(StoreContext)

  let _serviceLinks =
    serviceDetailRoutes && getArrayFromObject(serviceDetailRoutes)

  _serviceLinks = [
    ...(serviceRoute && getArrayFromObject(serviceRoute)),
    ..._serviceLinks,
  ]

  let _serviceURLS =
    serviceDetailRoutes &&
    Object.keys(serviceDetailRoutes)?.map(
      serviceDetail => serviceDetailRoutes[serviceDetail]?.url
    )

  _serviceURLS = [
    ..._serviceURLS,
    serviceRoute &&
      Object.keys(serviceRoute)?.map(
        serviceDetail => serviceRoute[serviceDetail]?.url
      ),
  ]

  // Creating Service Links
  // **********************

  return (
    <>
      <Navbar bg="light" expand="xl" className="px-4 py-3">
        <Container fluid="xxl">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img className="logo_img" src={logo} alt={logo} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <Link
                to={"/"}
                className={`nav-item nav-link `}
                activeClassName="active"
              >
                Home
              </Link>

              <NavDropdown
                title="Services"
                id="navbarScrollingDropdown"
                renderMenuOnMount={true}
                active={location.pathname.split("/")[1] === "services"}
              >
                <Link
                  key={0}
                  to={"/services"}
                  className="dropdown-item"
                  activeClassName="active"
                >
                  All Services
                </Link>
                {services[0]?.map(link => {
                  return (
                    <Link
                      key={link?.sUrl}
                      to={"/services/" + link?.sUrl}
                      className="dropdown-item"
                      activeClassName="active"
                    >
                      {link?.sName}
                    </Link>
                  )
                })}
              </NavDropdown>

              <Link
                to={"/case-study"}
                className={`nav-item nav-link `}
                activeClassName="active"
              >
                Case Study
              </Link>

              <Link
                to={"/blog"}
                className={`nav-item nav-link `}
                activeClassName="active"
              >
                Articles
              </Link>

              {/* TODO Links START
               *************************/}

              <Link
                to={"/about"}
                className={`nav-item nav-link`}
                activeClassName="active"
              >
                About Us
              </Link>
              <Link
                to={"/team"}
                className={`nav-item nav-link `}
                activeClassName="active"
              >
                Team
              </Link>
              <Link
                to={"/testimonials"}
                className={`nav-item nav-link `}
                activeClassName="active"
              >
                Testimonials
              </Link>
              <Link
                to={"/faq"}
                className={`nav-item nav-link `}
                activeClassName="active"
              >
                FAQ
              </Link>

              {/* TODO Links END
               *************************/}
            </Nav>

            {/* TODO  ICONS START
             ***********************/}
            {/* <div className="h-100 d-lg-inline-flex align-items-center d-flex">
              <Link
                to="/"
                className="btn btn-square text-accent-1 me-2 shadow-none"
              >
                <Search size={20} />
              </Link>
              <Link
                to="/"
                className="btn btn-square text-accent-1 me-2 shadow-none"
              >
                <CartFill size={20} />
              </Link>
              <Link
                to="/"
                className="btn btn-square text-accent-1 me-2 shadow-none"
              >
                <Share size={20} />
              </Link>
            </div> */}

            {/* TODO ICONS END
             ******************************** */}

            <div className="h-100 d-lg-inline-flex align-items-center d-none">
              <div className={`${phone_btn}`}>
                <Link
                  to="/"
                  className="btn btn-default rounded-circle phone_btn text-accent-1 me-0 d-flex shadow-none"
                >
                  <TelephoneFill size={20} />
                </Link>
              </div>
              <div className={`margin-left ${call_help}`}>
                <p className="mb-0 link_call">Get Help</p>
                <p className="mb-0 link_number">+0987654321</p>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
