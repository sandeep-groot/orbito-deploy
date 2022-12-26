import * as React from "react"
import Client_1 from "../../../../images/client1.png"
import Client_2 from "../../../../images/client_2.png"
import CardTestimonial from "../../../CardTestimonial"
import { card_containerStyle } from "./index.module.css"
const Testimonial2 = () => {
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
    {
      key: "2",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "Sarah Jessica",
      profession: "Singer",
      image: Client_2,
    },
  ]
  return (
    <section id="testimonial2" className="container-xxl container_expand pt-5">
      <div className="container">
        <p className="title text-center">TESTIMONIAL</p>
        <h1 className={`page_heading text-center mb-4 color_test`}>
          What People Say About Us
        </h1>
        <p className={`description text-center color_test_des`}>
          Mation ullamco laboris nisi ut aliquip exea core dolor in repre hender
          fugiat nulla pariatur.
        </p>
        <div className="row">
          {testimonies.map(item => {
            return (
              <CardTestimonial
                key={item?.key}
                info={item}
                containerStyle={card_containerStyle}
                topQuote
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonial2
