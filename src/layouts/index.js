/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Header from "../components/Header"
import "./layout.css"
import "../scss/bootstrap.scss"
import "../global.css"
import Footer from "../components/Footer"
import ScrollBackToTop from "../components/ScrollBackToTop"
import { Button, Container } from "react-bootstrap"
import "antd/dist/antd.css"
import StoreProvider from "../utils/context"
import { navigate } from "gatsby"
import { isUserLoggedIn } from "../utils/functions"
import logo from "../images/logo/logo.png"

const Layout = props => {
  const { children } = props
  const { site } = useSiteMetadata()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("LOGGED_IN")
    navigate("/signIn")
  }

  useEffect(() => {
    console.log(props.location)
    let isLogin = isUserLoggedIn()
    setIsLoggedIn(isLogin)
  }, [props.location])

  if (
    props.location.pathname === "/signIn" ||
    props.location.pathname === "/admin" ||
    props.location.pathname === "/admin/" ||
    props.location.pathname === "/signIn/"
  ) {
    return (
      <Container
        fluid="xxl"
        className="container_expand"
        style={{ padding: "0" }}
      >
        <StoreProvider>
          {isLoggedIn ? (
            <header
              className="d-flex justify-content-between mb-4 p-3 bg_head"
              {...props}
            >
              <img className="logo_img mt-2 mb-2" src={logo} alt={logo} />
              <Button className="m-2" variant="primary" onClick={handleLogout}>
                Logout
              </Button>
            </header>
          ) : null}
          <main>{children}</main>
        </StoreProvider>
      </Container>
    )
  }

  return (
    <Container
      fluid="xxl"
      className="container_expand"
      style={{ padding: "0" }}
    >
      <StoreProvider>
        <Header {...props} />
        <main
          style={{
            margin: `0 auto`,
          }}
        >
          {children}
        </main>
        <Footer />
        <ScrollBackToTop />
      </StoreProvider>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
