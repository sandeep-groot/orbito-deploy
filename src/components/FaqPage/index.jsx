import React from "react"
import AccordionEl from "../AccordionEl"
import PageBanner from "../PageBanner"
import FAQSection from "../ServicePage/ServiceComponents/FAQSection"

import { detail_progress } from "./index.module.css"

const FaqPage = props => {
  // const path = props?.location?.pathname?.split("/")

  const Items1 = [
    // Use unique key for every Accordion element,
    // as the same key is used as an id for each accordion
    {
      key: "FAQ_Ac_1_00",
      header: "Why Orbito is the best choice for your website?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
      active: true,
    },
    {
      key: "FAQ_Ac_1_01",
      header: "How can we get the best from Orbito template?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
    {
      key: "FAQ_Ac_1_02",
      header: "Why Orbito is so popular among all other template?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
    {
      key: "FAQ_Ac_1_03",
      header: "What is the future plan for Orbito?",
      body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu caecat cupidatat non proident",
    },
  ]

  const Items2 = [
    // Use unique key for every Accordion element,
    // as the same key is used as an id for each accordion
    {
      key: "FAQ_Ac_2_00",
      header: "Why Orbito is the best choice for your website?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
    {
      key: "FAQ_Ac_2_01",
      header: "How can we get the best from Orbito template?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
    {
      key: "FAQ_Ac_2_02",
      header: "Why Orbito is so popular among all other template?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
    {
      key: "FAQ_Ac_2_03",
      header: "What is the future plan for Orbito?",
      body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu caecat cupidatat non proident",
    },
  ]

  const Items3 = [
    // Use unique key for every Accordion element,
    // as the same key is used as an id for each accordion
    {
      key: "FAQ_Ac_3_00",
      header: "Why Orbito is the best choice for your website?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
    {
      key: "FAQ_Ac_3_01",
      header: "How can we get the best from Orbito template?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
    {
      key: "FAQ_Ac_3_02",
      header: "Why Orbito is so popular among all other template?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
    {
      key: "FAQ_Ac_3_03",
      header: "What is the future plan for Orbito?",
      body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua boris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu caecat cupidatat non proident",
    },
  ]
  return (
    <>
      <PageBanner pageHeading={<span>FAQ's</span>} {...props} />

      <FAQSection accordionElments={Items1} />

      <section
        id="faq2"
        className="container-xxl container_expand padding_inner_pr mt-4"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <p className="title text-center">GOOD TO KNOW</p>
              <h1 className={`page_heading text-center mb-4 px-3`}>
                Frequently Asked Questions
              </h1>
              <p className={`${detail_progress} text-center`}>
                Mation ullamco laboris nisi ut alior in rep rehend er fugiat
                nulla pariatur.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 col-lg-6 mt-4">
              <div style={{ overflow: "hidden", border: "0" }}>
                {Items2.map((item, i) => {
                  return <AccordionEl key={item?.key} item={item} />
                })}
              </div>
            </div>

            <div className="col-md-6 col-lg-6 mt-4">
              <div style={{ overflow: "hidden", border: "0" }}>
                {Items3.map((item, i) => {
                  return <AccordionEl key={item?.key} item={item} />
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FaqPage
