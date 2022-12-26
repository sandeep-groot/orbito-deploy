import React, { useState } from "react"
import { button_services, tab_buttons2 } from "./index.module.less"
import AdminServices from "./components/AdminServices"
import AdminBlog from "./components/AdminBlog"
import { navigate } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const AdminPage = props => {
  const [links, setLinks] = useState({
    key: "blog",
    current: "blog",
  })

  const onServiceClickHandler = () =>
    setLinks({ key: "service", current: "service" })
  const onBlogClickHandler = () => setLinks({ key: "blog", current: "blog" })

  return (
    <>
    <GatsbySeo title="Admin" />
      <section id="admin">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <div className={`${button_services}`}>
                {/* <button
                  className={`btn btn-primary ${tab_buttons2} mb-2`}
                  id="button_tab"
                  data-bs-toggle="tab"
                  type="button"
                  onClick={onServiceClickHandler}
                >
                  Services{" "}
                </button> */}
                <button
                  className={`btn btn-primary ${tab_buttons2} mb-2`}
                  id="button_tab"
                  data-bs-toggle="tab"
                  type="button"
                  onClick={onBlogClickHandler}
                >
                  Blogs{" "}
                </button>
              </div>
            </div>

            <div className="col-md-8">
              {links?.current === "service" && <AdminServices />}
              {links?.current === "blog" && <AdminBlog />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminPage
