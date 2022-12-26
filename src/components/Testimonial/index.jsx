import React from "react"
import Client_1 from "../../images/client1.png"
import Client_2 from "../../images/client_2.png"
import CardTestimonial from "../CardTestimonial"

const Testimonial = () => {
  const testimonies = [
    {
      key: "0",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "Mike Anderson",
      profession: "Web Developer",
      image: Client_1,
    },
    {
      key: "1",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "Sarah Jessica",
      profession: "Singer",
      image: Client_2,
    },
  ]
  return (
    <section id="testimonial_section" className="py-5 background_graphics mt-5">
      <div className="container-xxl container_expand">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-4">
              <p className="title">TESTIMONIAL</p>
              <h1 className={`page_heading mb-4 padding_right_all2`}>
                What People Say About Us
              </h1>
              <p className={`description`}>
                Mation ullamco laboris nisi ut aliquip exea core dolor in repre
                hender fugiat nulla pariatur.
              </p>
            </div>

            {testimonies.map(item => {
              return <CardTestimonial key={item?.key} info={item} bottomQuote />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
