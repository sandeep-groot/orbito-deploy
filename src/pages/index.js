import * as React from "react"
import Seo from "../components/seo"
import Banner from "../components/Banner"
import AboutSection from "../components/AboutSection"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import WhyUs from "../components/WhyUS"
import Testimonial from "../components/Testimonial"
import Counter from "../components/Counter"
import Blog from "../components/Blog"
import WhyUsTwo from "../components/WhyUsTwo"
import Brands from "../components/Brands"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const Home = props => {
  const { serverData } = props
  const counts = [
    {
      key: "0",
      count: "120",
      sign: "+",
      unit: "",
      title: "Total",
      name: "Countries",
    },
    {
      key: "2",
      count: "2",
      unit: "k",
      title: "Worldwide",
      name: "Customers",
    },
    {
      key: "3",
      count: "10",
      unit: "k",
      title: "Completed",
      name: "Projects",
    },
  ]
  return (
    <>
      <GatsbySeo
        {...serverData}
        title="Home"
        description="A short description for home page goes here."
      />
      {/* Banner section
       ******************/}
      <Banner
        title="WE ARE ORBITO"
        heading="World Leading Creative Agency"
        description="Mation ullamco laboris nisi ut aliquip ex ea core dolor in reprehend er fugiat nulla pariatur."
        image={{
          url: "../../images/carousel-1.jpg",
          alt: "carousel image",
        }}
      />

      {/* Services section
       *******************/}
      <Services />

      {/* About Us section
       *******************/}
      <AboutSection />

      {/* Portfolio section */}
      <Portfolio />

      {/* Why Us section one*/}
      <WhyUs />
      {/* Whu Us Section Two */}
      <WhyUsTwo />

      {/* Brands Section */}
      <Brands />

      {/* Testimonial section */}
      <Testimonial />

      {/* Counter section */}
      <Counter counts={counts} />

      {/* Blog section */}
      <Blog />
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default Home
