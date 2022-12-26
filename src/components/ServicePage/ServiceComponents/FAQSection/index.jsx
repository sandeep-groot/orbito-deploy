import React from "react"
import AccordionEl from "../../../AccordionEl"
import { tab_buttons } from "./index.module.css"

const FAQSection = ({accordionElments}) => {

  return (
    <section id="faq" className="container-xxl container_expand padding_inner_pr my-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <p className="title text-center">GOOD TO KNOW</p>
            <h1 className={`page_heading text-center mb-4 px-3`}>
              Frequently Asked Questions
            </h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 col-lg-4 text-center">
            <div className="button_questions">
              <button
                className={`btn btn-primary ${tab_buttons} selected mb-2`}
                id="button_tab"
                data-bs-toggle="tab"
                type="button"
              >
                About Service{" "}
              </button>
              <button
                className={`btn btn-primary ${tab_buttons} mb-2`}
                id="button_tab"
                data-bs-toggle="tab"
                type="button"
              >
                Subscription & Billing{" "}
              </button>
              <button
                className={`btn btn-primary ${tab_buttons} mb-2`}
                id="button_tab"
                data-bs-toggle="tab"
                type="button"
              >
                Refund Policy{" "}
              </button>
              <button
                className={`btn btn-primary ${tab_buttons} mb-2`}
                id="button_tab"
                data-bs-toggle="tab"
                type="button"
              >
                Support{" "}
              </button>
            </div>
          </div>
          <div className="col-md-1 col-lg-1"></div>
          <div className="col-md-7 col-lg-7">

    <div style={{overflow: 'hidden', border: '0'}}>
    {accordionElments.map((item, i) => {

return  <AccordionEl key={item?.key} item = {item} bodyStyle={{ border: "0" }} />

    })}

        
            </div>


            
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
