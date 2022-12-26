import React from "react"
import CardTestimonial from "../CardTestimonial"
import Client_1 from "../../images/client1.png"
import Client_2 from "../../images/client_2.png"
import PageBanner from "../PageBanner"

const TestimonialPage = props => {
  // const path = props?.location?.pathname?.split("/")

  const testimonies = [
    {
      key: "TST_01",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "Mike Anderson",
      profession: "Web Developer",
      image: Client_1,
    },
    {
      key: "TST_02",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "Sarah Jessica",
      profession: "Singer",
      image: Client_2,
    },
    {
      key: "TST_03",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "Paul Harrison",
      profession: "Journalist",
      image: Client_2,
    },
    {
      key: "TST_04",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "John Anderson",
      profession: "Web Developer",
      image: Client_1,
    },
    {
      key: "TST_05",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "Sarah Jessica",
      profession: "Singer",
      image: Client_2,
    },
    {
      key: "TST_06",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "Paul Harrison",
      profession: "Journalist",
      image: Client_2,
    },
    {
      key: "TST_07",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "Mike Anderson",
      profession: "Web Developer",
      image: Client_1,
    },
    {
      key: "TST_08",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "Sarah Jessica",
      profession: "Journalist",
      image: Client_2,
    },
    {
      key: "TST_09",
      testimonial:
        "Duis aute irure dolor in reprehe nd erit in voluptate velit esse cill uszm dolore eu fugiat nulla pari atur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit",
      name: "Paul Harrison",
      profession: "Singer",
      image: Client_2,
    },
  ]
  return (
    <div>
      <section>
        {/* Banner Section
         *********************/}
        <PageBanner
          pageHeading={<span className="text-capitalize">Testimonials</span>}
          {...props}
        />
        <div className="container py-5 mt-4">
          <div className="row">
            {testimonies?.length
              ? testimonies.map(item => {
                  return (
                    <CardTestimonial key={item?.key} info={item} bottomQuote />
                  )
                })
              : null}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialPage
