import * as React from "react"
import Seo from "../../components/seo"
import ServicePage from "../../components/ServicePage"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const ServicesPage = props => {
  const { serverData } = props
  return (
    <>
      <GatsbySeo {...serverData} title="Services" />
      <ServicePage {...props} />
    </>
  )
}

// export const Head = () => <Seo title="Services" />

export default ServicesPage

