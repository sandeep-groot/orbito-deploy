import React from "react"
import ServiceDetailPage from "../../components/ServiceDetailPage"
import { GatsbySeo } from "gatsby-plugin-next-seo"

// import Seo from "../../components/seo"

const ServiceDetail = props => {
  const { location, serverData } = props

  const getPageHeading = () => {
    switch (location?.pathname) {
      case "/services/web":
        return "Web Development"
      case "/services/graphics":
        return "Graphic Design"
      case "/services/online":
        return "Online Security"
      case "/services/search":
        return "Search Engine Optimization"
      case "/services/mobile":
        return "Mobile App Development"
      case "/services/digital":
        return "Digital Marketing"
      default:
        break
    }
  }
  return (
    <>
      <GatsbySeo {...serverData} title={getPageHeading()} />
      <ServiceDetailPage
        imageUrl={
          "https://uiuxom.com/orbito/wp/version_01/wp-content/uploads/2022/06/5-5.jpg"
        }
        getPageHeading={getPageHeading}
        {...props}
      />
    </>
  )
}

// export const Head = () => <Seo title="Service Detail" />

export default ServiceDetail
