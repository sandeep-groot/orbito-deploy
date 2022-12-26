import React from "react"
import { button_services, icon_heading } from "./index.module.css"
import { Square } from "../../../../utils/icons"
import AppLink from "../../../AppLink"
import { StoreContext } from "../../../../utils/context"
// import { getStorage } from "../../../../utils/localStorage"

const ServiceLinks = props => {
  const { location } = props

  const { services } = React.useContext(StoreContext)

  // const [links, setLinks] = useState([])

  // const services = JSON.parse(getStorage("services"))

  // useEffect(() => {
  //   if (Array?.isArray(services)) {
  //     services?.map(service => {
  //       setLinks(prev => {
  //         return [
  //           ...prev,
  //           {
  //             title: service?.sName,
  //             // active: props?.service_detail_page === "digital" ? true : false,
  //           },
  //         ]
  //       })
  //     })
  //   }
  // }, [])

  return (
    <div className={`${button_services}`}>
      <div className="d-flex align-items-center mb-4">
        <Square />
        <h5 className={`${icon_heading} ms-3 mb-0`}>Services</h5>
      </div>

      {Array?.isArray(services[0]) &&
        services[0]?.map(link => {
          return (
            <AppLink
              key={link?.sUrl}
              link={link?.sUrl}
              title={link?.sName}
              active={location.pathname.split("/")[2] === link?.sUrl}
              {...props}
            />
          )
        })}
    </div>
  )
}

export default ServiceLinks
