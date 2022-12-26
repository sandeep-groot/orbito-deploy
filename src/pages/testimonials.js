import * as React from "react"
import Seo from "../components/seo"
import TestimonialPage from "../components/TestimonialPage"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const Testimonial = props => {
  const { serverData } = props
  return (
    <>
      <GatsbySeo
      {...serverData}
        title="Testimonial"
        description="A short description for Testimonial page goes here."
      />
      <TestimonialPage {...props} />
    </>
  )
}
// export const Head = () => <Seo title="Testimonial" />

export default Testimonial
