import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { Form, message } from "antd"
import { signin_form, login_text, signin_form_align } from "./index.module.css"
import { LoginUserAPI } from "../../api/user"
import { navigate } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"


const SignInPage = props => {
  const [form] = Form?.useForm()
  const onUserLoginHandler = values => {
    let data = new FormData()
    const payload = {
      ...values,
    }

    LoginUserAPI(payload)
      .then(res => {
        message.success("Login Successful")
        localStorage.setItem('LOGGED_IN', true);
        navigate('/admin')
      })
      .catch(err => {
        message.error(err?.response?.data?.message);
      })


  }



  return (
    <div className="container">
      <GatsbySeo title="Sign In" />
      <div className={`${signin_form_align} row justify-content-center`}>
        <div className="col-md-6">
          <div className={`${signin_form} p-5`}>
            <h2 className={`${login_text} text-center mb-4`}>LOGIN</h2>
            <Form

              form={form}
              onFinish={onUserLoginHandler}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please enter your username",
                    whitespace: true,
                  },
                ]}
              >
                <input className={"form-control"} type="text" placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                    whitespace: true,
                  },
                ]}
              >
                <input className={"form-control"} type="password" placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <div className="text-center mt-5">
                  <Button className="w-100" variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
