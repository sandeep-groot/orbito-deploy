import React from "react"
import q_2 from "../../images/q2.png"
import q_1 from "../../images/q1.png"

import {
  margin_left_name,
  client_comments,
  testimonial_boxes,
  client_position,
  client_name,
} from "./index.module.css"

const CardTestimonial = ({ info, containerStyle, topQuote, bottomQuote }) => {
  return (
    <div className={`col-md-12 col-lg-4 mb-4 position_div ${containerStyle}`}>
      <div className={`${testimonial_boxes}  p-5`}>
        {topQuote && (
          <div className="d-flex justify-content-center mb-4">
            <img className="img-fluid" src={q_1} alt={q_1} />
          </div>
        )}
        <p className={`${client_comments} mb-5`}>{info?.testimonial}</p>
        <div className="d-flex mb-2">
          <div>
            <img
              className="img-fluid client_images"
              src={info?.image}
              alt={info?.image}
            />
          </div>
          <div className={`${margin_left_name}`}>
            <p className={`${client_name}`}>{info?.name}</p>
            <p className={`${client_position} mb-0`}>{info?.profession}</p>
          </div>
        </div>
      </div>
      {bottomQuote && (
        <img className="img-fluid client_image2" src={q_2} alt={q_2} />
      )}
    </div>
  )
}

export default CardTestimonial
