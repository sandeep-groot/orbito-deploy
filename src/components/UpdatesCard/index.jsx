import React, { useEffect, useState } from "react"
import {
  margin_blog_boxes,
  date_time,
  _date,
  described_blog,
  icon_name,
  blogs_all,
  blog_image,
  loadingSpinner,
  height_blog_img,
} from "./index.module.css"
import defaultImg from "../../images/default-thumbnail.jpg"
import { Folderfill, Personfill, Chatfill } from "../../utils/icons"
import Img from "gatsby-image"
import { BaseURL, AppURL } from "../../common/constants"
import { Link } from "gatsby"
import { Spinner } from "react-bootstrap"

const UpdatesCard = ({
  sources,
  alt,
  date,
  month,
  updateType,
  user,
  chatCount,
  description,
  classDescribe,
  id,
  slug,
}) => {
  return (
    <div
      className={`col-md-12 col-lg-4 mt-4 position-relative ${margin_blog_boxes}`}
    >
      <div className={`${height_blog_img} position-relative`}>
        <div className={`${date_time}`}>
          <p className={`${_date} mb-0`}>{date}</p>
          <p className="mb-0">{month}</p>
        </div>
        <Spinner
          className={`${loadingSpinner}`}
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <img
          src={`${BaseURL}/${sources}`}
          alt={alt}
          className={`${blog_image}`}
          onLoad={e => (e.target.parentNode.children[1].style = "display:none")}
          onError={e => {
            e.target.src = `${defaultImg}`
          }}
        />
        {/* <Img fluid={sources} alt={alt} className={`${blog_image}`} /> */}
      </div>
      <div className={`${described_blog} ${classDescribe}`}>
        <div className="d-flex align-items-center mb-4">
          <div className="d-flex me-4 align-items-center">
            <Folderfill />
            <p className={`${icon_name} mb-0 ms-2`}>{updateType}</p>
          </div>
          <div className="d-flex me-4 align-items-center">
            <Personfill />
            <p className={`${icon_name}   mb-0 ms-2`}>{user}</p>
          </div>
          {/* <div className="d-flex me-4 align-items-center">
            <Chatfill />
            <p className={`${icon_name}   mb-0 ms-2`}>{chatCount}</p>
          </div> */}
        </div>
        {/* <p className={`${blogs_all} `} onClick={onBlogClickHandler}>
          {description}
        </p> */}
        <Link className={`${blogs_all} `} to={`/blog/${slug}`}>
          {description}
        </Link>
      </div>
    </div>
  )
}

export default UpdatesCard
