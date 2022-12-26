import React from "react"
import {
  icon_contact,
  _description,
  _input1,
  _txt_area_input,
} from "./index.module.css"
import { Form, message } from "antd"
import PageBanner from "../PageBanner"
import { TelephoneFill, EnvelopeFill, GeoAltFill } from "../../utils/icons"
import Button from "../UI/Button"
import { SendEmailAPI } from "../../api/services"

const ContactUsPage = props => {
  const [quoteForm] = Form?.useForm()

  const onQuoteFinishHandler = values => {
    SendEmailAPI(values).then(res => {
      if (res?.data?.status === "ok") {
        message.success(res?.data?.message)
        quoteForm?.resetFields()
      }
    })
  }

  return (
    <>
      <PageBanner pageHeading={<span>Contact</span>} {...props} />
      <section
        id="contact"
        className="container-xxl container_expand py-5 mt-5"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <p className="title text-center">CONTACT US</p>
              <h1 className={`page_heading text-center mb-4`}>
                We Want to Hear from You
              </h1>
              <p className={`description text-center`}>
                Mation ullamco laboris nisi ut aliquip exea core dolor in repre
                hender fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="py-5">
                <div className="d-flex align-items-center">
                  <div
                    className={`${icon_contact} d-flex justify-content-center align-items-center`}
                  >
                    <GeoAltFill color="#fff" />
                  </div>
                  <div className="ms-4">
                    <h5 className="icon_heading mb-0">Location</h5>
                    <p className={`${_description} mt-2 mb-0`}>
                      20 Bordeshi New York, USA
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-3">
                  <div
                    className={`${icon_contact} d-flex justify-content-center align-items-center`}
                  >
                    <TelephoneFill color="#fff" />
                  </div>
                  <div className="ms-4">
                    <h5 className="icon_heading mb-0">Phone</h5>
                    <p className={`${_description} mt-2 mb-0`}>
                      +123 456 7890000
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div
                    className={`${icon_contact} d-flex justify-content-center align-items-center`}
                  >
                    <EnvelopeFill color="#fff" />
                  </div>
                  <div className="ms-4">
                    <h5 className="icon_heading mb-0">Email</h5>
                    <p className={`${_description} mt-2 mb-0`}>
                      hello@orbito.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <Form
                name="blog_add_update_form"
                form={quoteForm}
                onFinish={onQuoteFinishHandler}
                autoComplete="off"
              >
                <div className="row">
                  <div className="col-md-6">
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name",
                          whitespace: true,
                        },
                      ]}
                    >
                      <input
                        type="text"
                        className={`${_input1} form-control`}
                        placeholder="Your name"
                      />
                    </Form.Item>
                  </div>
                  <div className="col-md-6">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email",
                          whitespace: true,
                        },
                      ]}
                    >
                      <input
                        type="text"
                        className={`${_input1} form-control`}
                        placeholder="Your email"
                      />
                    </Form.Item>
                  </div>

                  {/* <div className="col-md-6">
                  <input
                    type="text"
                    className={`${_input1} form-control`}
                    placeholder="Your phone"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className={`${_input1} form-control`}
                    placeholder="Your subject"
                  />
                </div> */}

                  <div className="col-md-12">
                    <Form.Item
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "Please input your message",
                          whitespace: true,
                        },
                      ]}
                    >
                      <textarea
                        type="text"
                        className={`${_txt_area_input} form-control`}
                        placeholder="Write your message here"
                      />
                    </Form.Item>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <Button text="Submit Now" size="small" type="submit" />
                  </div>
                </div>
              </Form>
            </div>
            <div className=" mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.000715919849!2d-6.261524884211728!3d53.343243379978475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9b76719607%3A0x9d13471d963893a7!2s1%20Grafton%20Street%2C%20Dublin%2C%20Ireland!5e0!3m2!1sen!2sin!4v1667564279969!5m2!1sen!2sin"
                width="100%"
                height="280"
                allowfullscreen=""
                loading="lazy"
                title="libertymap"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUsPage
