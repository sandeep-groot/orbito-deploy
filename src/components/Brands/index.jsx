import React from "react"
import client_1 from "../../images/1st.png"
import client_2 from "../../images/2nd.png"
import client_3 from "../../images/3rd.png"
import client_4 from "../../images/4th.png"
import client_5 from "../../images/5th.png"

const Brands = () => {
  return (
    <section
      id="offered_brands"
      className="container-xxl container_expand py-5"
    >
      <div className="container text-center">
        <div className={`row justify-content-between`}>
          <div className="col-md-2 mb-4 mt-4">
            <img
              className="img-fluid client_image"
              src={client_1}
              alt={client_1}
            />
          </div>
          <div className="col-md-2 mb-4 mt-4">
            <img
              className="img-fluid client_image"
              src={client_2}
              alt={client_2}
            />
          </div>
          <div className="col-md-2 mb-4 mt-4">
            <img
              className="img-fluid client_image"
              src={client_3}
              alt={client_3}
            />
          </div>
          <div className="col-md-2 mb-4 mt-4">
            <img
              className="img-fluid client_image"
              src={client_4}
              alt={client_4}
            />
          </div>
          <div className="col-md-2 mb-4 mt-4">
            <img
              className="img-fluid client_image"
              src={client_5}
              alt={client_5}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
