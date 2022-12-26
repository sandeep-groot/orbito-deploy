import React from "react"
import { Square } from "../../../../utils/icons"
import Button from "../../../UI/Button"
import {
  _button,
  _input,
  _txt_area_input,
  icon_heading,
} from "./index.module.css"
import { Form, message } from "antd"
import { SendEmailAPI } from "../../../../api/services"

const QuoteForm = () => {
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
    <Form
      name="blog_add_update_form"
      form={quoteForm}
      onFinish={onQuoteFinishHandler}
      autoComplete="off"
    >
      <div className={`${_button} mt-5`}>
        <div className="d-flex align-items-center mb-4">
          <Square />
          <h5 className={`${icon_heading} ms-3 mb-0`}>Get A Quote</h5>
        </div>

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
            className={`${_input} form-control`}
            placeholder="Your name"
          />
        </Form.Item>

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
            className={`${_input} form-control`}
            placeholder="Your email"
          />
        </Form.Item>
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
            placeholder="Your message"
          />
        </Form.Item>

        <Button text="Submit Now" size="small" type="submit" />
      </div>
    </Form>
  )
}

export default QuoteForm
