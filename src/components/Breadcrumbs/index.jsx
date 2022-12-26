import React from "react"
import { Link } from "gatsby"
import {
  __breadcrumbs,
  breadcrumb_not_active,
  breadcrumb_active,
  breadcrumb_arrow,
} from "./index.module.css"

const Breadcrumbs = props => {
  const { location, pageResources } = props

  const breadcrumbs = [
    {
      title: "Services",
      pathname: "/services",
    },
    {
      title: "Web Development",
      pathname: "/services/web",
    },
    {
      title: "Online Security",
      pathname: "/services/online",
    },
    {
      title: "Search Engine Optimization",
      pathname: "/services/search",
    },
    {
      title: "Mobile App Development",
      pathname: "/services/mobile",
    },
    {
      title: "Graphic Design",
      pathname: "/services/graphics",
    },
    {
      title: "Video Production",
      pathname: "/services/video",
    },
    {
      title: "Digital Marketing",
      pathname: "/services/digital",
    },
    {
      title: "About Us",
      pathname: "/about",
    },
    {
      title: "Team",
      pathname: "/team",
    },
    {
      title: "Testimonials",
      pathname: "/testimonials",
    },
    {
      title: "FAQ",
      pathname: "/faq",
    },
    {
      title: "Contact",
      pathname: "/contactUs",
    },
    {
      title: "Blog",
      pathname: "/blog",
    },
    {
      title: "Case Study",
      pathname: "/case-study",
    },
    {
      title: "Branding for the ABC...",
      pathname: "/case-study/detail-1",
    },
  ]

  return (
    <nav className={`${__breadcrumbs}`}>
      <Link to="/" className={`${breadcrumb_active}`}>
        Home
      </Link>

      {pageResources?.page?.path === "/404.html" && (
        <>
          <span className={breadcrumb_arrow}>&gt;</span>
          <Link to="/404" className={breadcrumb_active}>
            Error 404
          </Link>
        </>
      )}

      {breadcrumbs.map(link => {
        const isLink =
          location.pathname.startsWith(`${link?.pathname}`) &&
          pageResources?.page?.path !== "/404.html"

        return (
          isLink && (
            <div key={link?.title}>
              <span className={breadcrumb_arrow}>&gt;</span>
              <Link
                to={link?.pathname}
                className={`${
                  isLink ? breadcrumb_active : breadcrumb_not_active
                }`}
              >
                {link?.title}
              </Link>
            </div>
          )
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
