import React, { useEffect } from "react"
import ServiceDetailPage from "../components/ServiceDetailPage"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import Seo from "../components/seo"

const ServiceDetail = props => {
  const { location, serverData, pageContext } = props

  return (
    <>
      <GatsbySeo {...serverData} title={pageContext?.heading} />
      <ServiceDetailPage
        imageUrl={
          "https://uiuxom.com/orbito/wp/version_01/wp-content/uploads/2022/06/5-5.jpg"
        }
        pageHeading={pageContext?.heading}
        {...props}
      />
    </>
  )
}

// export const Head = () => <Seo title="Service Detail" />

export default ServiceDetail
