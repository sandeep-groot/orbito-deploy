import React from "react"
import { Link } from "gatsby"
import ResultCard from "../ServiceDetailPage/ServiceDetailComponents/ResultCard"
import {
  service_details,
  get_help,
  call_help,
  phone_btn,
  background_btn,
  link_call,
  link_number,
  description_service_help,
  description_service_color,
  description_service,
  description_service_text,
  button_services,
  icon_heading,
} from "./index.module.css"

import {
  ListColumns,
  Calendar4Event,
  Rulers,
  FileEarmarkBarGraph,
  Square,
  TelephoneFill,
} from "../../utils/icons"
import LinkButton from "../LinkButton"
import PageBanner from "../PageBanner"
import Outcome from "./ServiceDetailComponents/Outcome"
import ElementCard from "./ServiceDetailComponents/ElementCard"
import QuoteForm from "./ServiceDetailComponents/QuoteForm"
import ServiceLinks from "./ServiceDetailComponents/ServiceLinks"
import { GetCountryAPI } from "../../api/geo"
import { ServicePageContents } from "../../utils/contents"

const ServiceDetailPage = props => {
  const { location, pageHeading } = props
  const [geo, setGeo] = React.useState(null)

  React.useEffect(() => {
    // Filtering contents based on GEO location
    GetCountryAPI().then(res => {
      if (res) {
        setGeo(
          ServicePageContents?.find(content => {
            return (
              content?.countryCode === res?.countryCode ||
              content?.countryCode === "default"
            )
          })
        )
      }
    })
  }, [])

  const getDescriptionTitle = () => {
    const searchParam = new URLSearchParams(location?.search)
    return searchParam?.has("utm_title")
      ? searchParam?.get("utm_title")
      : "Description"
  }

  const results = [
    {
      text: "Prodcut sales growing per Month",
      count: "90%",
      unit: "",
    },
    {
      text: "Prodcut Sales Growing Per Month",
      count: "80%",
      unit: "",
    },
    {
      text: "Prodcut Sales Growing Per Month",
      count: "8K",
      unit: "",
    },
  ]

  return (
    <section className={`${service_details}`}>
      <PageBanner {...props} pageHeading={pageHeading} />

      {/* Page Description */}
      <div className="container py-5">
        <div className="row">
          {/* Right Section */}
          <div className="col-md-8 mt-4">
            <div>
              <h3 className={`${description_service} text-capitalize`}>
                {getDescriptionTitle()}
              </h3>
              <p className={`${description_service_text} mt-4`}>
                {/* Displaying contents based on GEO location */}
                {geo && geo?.pageContent}
              </p>
              <p className={`${description_service_text} mt-4`}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.
              </p>
            </div>
            {/* Service Elements*/}
            <div className="row mt-5">
              <h3 className={`${description_service}`}>Service Elements</h3>

              {/* {Array?.isArray(serviceElements) &&
                serviceElements?.map(element => "")} */}

              <ElementCard
                Icon={FileEarmarkBarGraph}
                title={"Creative Analysis"}
                description={
                  "Kobita tumi enderit in voluptate orro quisquam est, qui dolorem ipsum quia dolor sit amet, conse ctetur, adipisci velit, sed quia khobor"
                }
              />

              <ElementCard
                Icon={ListColumns}
                title={"Design & Scatches"}
                description={
                  "Kobita tumi enderit in voluptate orro quisquam est, qui dolorem ipsum quia dolor sit amet, conse ctetur, adipisci velit, sed quia khobor"
                }
              />

              <ElementCard
                Icon={Rulers}
                title={"Prototype & Wireframing"}
                description={
                  "Kobita tumi enderit in voluptate orro quisquam est, qui dolorem ipsum quia dolor sit amet, conse ctetur, adipisci velit, sed quia khobor"
                }
              />

              <ElementCard
                Icon={Calendar4Event}
                title={"Delivery & Deploy"}
                description={
                  "Kobita tumi enderit in voluptate orro quisquam est, qui dolorem ipsum quia dolor sit amet, conse ctetur, adipisci velit, sed quia khobor"
                }
              />
            </div>

            <div className="row mt-5">
              <h3 className={`${description_service}`}>Service Outcome</h3>

              <Outcome
                description={
                  "Duis aute irure dolor in reprehenderit in voluptate velit essecillum."
                }
              />
              <Outcome
                description={
                  "Excepteur sint occaecat cupidatat a deserunt mollit anim idest laborum."
                }
              />
              <Outcome
                description={
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
                }
              />
              <Outcome
                description={
                  "accusantium doloremque laudantium, totam rem aperiam, eaqueipsa quae ab illo"
                }
              />
              <Outcome
                description={
                  "inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                }
              />
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <img
                  src={
                    "https://uiuxom.com/orbito/wp/version_01/wp-content/uploads/2022/06/8-5-426x338.jpg"
                  }
                  alt={"service"}
                  className={"img-fluid border_radius_sr mt-1"}
                />
              </div>
              <div className="col-md-6">
                <img
                  src={
                    "https://uiuxom.com/orbito/wp/version_01/wp-content/uploads/2022/06/9-4-426x338.jpg"
                  }
                  alt={"service"}
                  className={"img-fluid border_radius_sr mt-1 custom_cs_mr"}
                />
              </div>
            </div>

            <div className="row mt-5">
              <h3 className={`${description_service} mb-0`}>Results</h3>
              {Array?.isArray(results) &&
                results?.map(result => {
                  return (
                    <ResultCard
                      key={result?.count + result?.unit}
                      text={result?.text}
                      count={result?.count}
                      unit={result?.unit}
                    />
                  )
                })}
            </div>
          </div>

          {/* Left Section */}
          <div className="col-md-4 mt-4">
            <ServiceLinks {...props} />

            {/* Quote Form
             *****************************************************/}
            <QuoteForm />

            <div className={`${get_help} mt-5`}>
              <h3 className={`${description_service_help} mb-4`}>Need Help?</h3>
              <p className={`${description_service_color}`}>
                Pabore et dolor mod tempor dunt ut labore et dolore magna aliqua
                nim veniam strud Pabore et dolor mod tempor dunt ut
              </p>
              <div className={`h-100 d-flex align-items-center mt-5`}>
                <div className={`${phone_btn}`}>
                  <Link
                    to="/"
                    className={`btn btn-default rounded-circle text-accent-1 me-0 d-flex shadow-none ${background_btn}`}
                  >
                    <TelephoneFill size={20} color={"#fff"} />
                  </Link>
                </div>
                <div className={`margin-left ${call_help}`}>
                  <p className={`mb-0 ${link_call}`}>Call Us</p>
                  <p className={`mb-0 ${link_number}`}>+0987654321</p>
                </div>
              </div>
            </div>
            <div className={`${button_services} mt-5`}>
              <div className="d-flex align-items-center mb-4">
                <Square />
                <h5 className={`${icon_heading} ms-3 mb-0`}>Company Profile</h5>
              </div>

              <LinkButton
                text="Download PDF"
                className="mt-3"
                size="small"
                url=""
                linkStyle={{ width: "100%" }}
              />
              <LinkButton
                text="Download Word File"
                className="mt-3"
                size="small"
                url=""
                linkStyle={{
                  width: "100%",
                  background: "transparent",
                  color: "#343c55",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetailPage
