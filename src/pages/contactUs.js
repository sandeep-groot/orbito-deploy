import * as React from "react"
import ContactUsPage from "../components/ContactUsPage"
import Seo from "../components/seo"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const ContactUs = props => {
  const { serverData } = props
  return (
    <>
      <GatsbySeo
      {...serverData}
        title="Contact Us"
        description="A short description for Contact Us page goes here."
      />
      <ContactUsPage {...props} />
    </>
  )
}

// export const Head = () => <Seo title="Contact Us" />

export default ContactUs
