import * as React from "react"
import FaqPage from "../components/FaqPage"
import Seo from "../components/seo"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const Faq = props => {
  return (
    <>
      <GatsbySeo
        title="FAQ"
        description="A short description for FAQ page goes here."
      />
      <FaqPage {...props} />
    </>
  )
}

// export const Head = () => <Seo title="FAQ" />

export default Faq
