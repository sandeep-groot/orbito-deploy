import React from "react"
import Card from "../../../../components/Card"

const Service = ({ serviceInfo }) => {
  return (
    <div className="container">
      <div className="row g-4 mt-5 margin_services">
        {Array?.isArray(serviceInfo) &&
          serviceInfo?.map(service => {
            return (
              <Card
                key={service?.sName}
                icon={service?.icon}
                heading={service?.sName}
                description={service?.sDescription}
                containerClass={"col-lg-4"}
                linkTo={"/services/"+ service?.sUrl}
                linkText="View Details"
              />
            )
          })}
      </div>
    </div>
  )
}

export default Service
