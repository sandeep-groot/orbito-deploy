import React from "react"
import FAQSection from "./ServiceComponents/FAQSection"
import OurProcess from "./ServiceComponents/OurProcess"
import PageBanner from "../PageBanner"
import {} from "./index.module.css"
import Service from "./ServiceComponents/Services"
import WhyUs from "../WhyUS"
import { StoreContext } from "../../utils/context"

const ServicePage = props => {
  const { services } = React.useContext(StoreContext)

  // const services = [
  //   {
  //     icon: 'WindowDock',
  //     sName: "Web Development",
  //     sDescription:
  //       "Ture dolor in reprehe ndiit in voluptate velit ese ism dolore eu fugiat nulla pari otore golatur.",

  //   },
  //   {
  //     icon: 'Bezier',
  //     sName: "Graphic Design",
  //     sDescription:
  //       "Ture dolor in reprehe ndiit in voluptate velit ese ism dolore eu fugiat nulla pari otore golatur.",

  //   },
  //   {
  //     icon: 'ShieldLock',
  //     sName: "Online Security",
  //     sDescription:
  //       "Ture dolor in reprehe ndiit in voluptate velit ese ism dolore eu fugiat nulla pari otore golatur.",

  //   },
  //   {
  //     icon: 'FileEarmarkText',
  //     sName: "Search Engine Optimization",
  //     sDescription:
  //       "Ture dolor in reprehe ndiit in voluptate velit ese ism dolore eu fugiat nulla pari otore golatur.",

  //   },
  //   {
  //     icon: 'BarChartLine',
  //     sName: "Digital Marketing",
  //     sDescription:
  //       "Ture dolor in reprehe ndiit in voluptate velit ese ism dolore eu fugiat nulla pari otore golatur.",

  //   },
  //   {
  //     icon: 'Phone',
  //     sName: "Mobile App Development",
  //     sDescription:
  //       "Ture dolor in reprehe ndiit in voluptate velit ese ism dolore eu fugiat nulla pari otore golatur.",

  //   },

  // ]

  // const services = useStaticQuery(graphql`
  //   query serviceQuery {
  //     allMysqlServices {
  //       edges {
  //         node {
  //           serviceId
  //           sUrl
  //           sName
  //           sDescription
  //           mysqlId
  //           createdAt
  //           icon
  //           updatedAt
  //         }
  //       }
  //     }
  //   }
  // `)

  const accordionElments = [
    {
      key: "0",
      header: "Why Orbito is the best choice for your website?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
      active: true,
    },
    {
      key: "1",
      header: "How can we get the best from Orbito template?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
    {
      key: "2",
      header: "Why Orbito is so popular among all other template?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
    {
      key: "3",
      header: "What is the future plan for Orbito?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
  ]
  return (
    <>
      {/* Banner Section
       *********************/}
      <PageBanner
        {...props}
        pageHeading={<span className="text-capitalize">Services</span>}
      />

      {/* Service Section
       *********************/}
      {services && <Service serviceInfo={services[0]} />}

      {/* Our Process Section
       *************************/}
      <OurProcess />

      {/* Why US Section
       ************************* */}
      <WhyUs containerStyle={{ backgroundColor: "#EEF7F8" }} />

      {/* FAQ Section
       *********************/}
      <FAQSection accordionElments={accordionElments} />
    </>
  )
}

export default ServicePage
