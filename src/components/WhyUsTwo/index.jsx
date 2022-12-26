import React from "react"
import {
  color_text_know,
  next_project,
  projects_www,
  numbering_www,
  background_www,
} from "./index.module.css"
import Knowmore from "../../images/knowmore.jpg"
import graph_1 from "../../images/graph_1.png"
import graph2 from "../../images/graph2.png"
import LinkButton from "../LinkButton"
import Accordion from "../AccordionEl"

const WhyUsTwo = () => {
  const Items = [
    {
      key: "0",
      header: "Why Orbito is the best choice for your website?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
    {
      key: "1",
      header: "How can we get the best from Orbito template?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
      active: true,
    },
    {
      key: "2",
      header: "Why Orbito is so popular among all other template?",
      body: "Virure dolor in rep rehenderit in voluptate vinim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cnsequat. Duis aute irure dolor in reprehen.",
    },
  ]
  return (
    <div className="container-fluid p-0 mb-5">
      <div id="why_us2" className="background_know py-5">
        <img className="img-fluid graph_1" src={graph_1} alt={graph_1} />
        <img className="img-fluid graph_2" src={graph2} alt={graph2} />
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <div>
                <img
                  className="img-fluid Know_more"
                  src={Knowmore}
                  alt={Knowmore}
                />
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-5 mt-5">
                  <div className={`${background_www}`}>
                    <p className={`${numbering_www} mb-0`}>3K</p>
                    <p className={`${projects_www} mb-0`}>
                      Total Projects Worldwide
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 mt-5">
                  <p className={`${next_project}`}>
                    Lets start talking now about next project
                  </p>

                  <LinkButton
                    className="margin_con_btn"
                    size="small"
                    url="/contactUs"
                    text="Contact Now"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <p className="title">GOOD TO KNOW</p>
              <h1 className={`${color_text_know} page_heading mt-4 mb-5 `}>
                We Are Dedicated to Shape Perfect Solutions
              </h1>
              <div style={{ overflow: "hidden", border: "0" }}>
                {Items.map((item, i) => {
                  return <Accordion key={item?.key} item={item} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUsTwo
