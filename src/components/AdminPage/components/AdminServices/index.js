import React from "react"
import { Form, message, Space } from "antd"
import { StoreContext } from "../../../../utils/context"
import { GetServiceAPI, AddUpdateService } from "../../../../api/services"
import { tab_buttons2 } from "./index.module.less"
import LinkAction from "../../../AntComponents/LinkAction"
import AdminTable from "../AdminTable"

const AdminServices = () => {
  const [form] = Form.useForm()
  const { service, services } = React.useContext(StoreContext)
  const [_service, setService] = service

  React.useEffect(() => {
    GetServiceAPI().then(res => {
      if (res?.data?.[0]) {
        setService(prev => {
          return [...prev, { ...res?.data?.[0] }]
        })
      }
    })
  }, [])

  React.useEffect(() => {
    form.setFieldsValue({
      ..._service?.[0],
    })
  }, [_service?.[0]])

  const onFinish = serviceName => {
    const payload = {
      ..._service?.[0],
      ...serviceName,
    }
    delete payload.updatedAt
    delete payload.createdAt
    AddUpdateService(payload).then(res => {
      if (res?.data?.service) {
        setService(prev => {
          return [...prev, { ...res?.data?.service }]
        })
        if (res?.data?.created) {
          message.success("You have successfully created service title")
        } else {
          message.success("You have successfully updated service title")
        }
      }
    })
  }

  const columns = [
    {
      title: "S.No",
      key: "sno",
      width: "20px",
      render: (text, object, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "sName",
      key: "sName",
      render: text => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "sDescription",
      key: "sDscription",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <LinkAction text="Update" onClick={() => console.log("edit  :>> ")} />
          {/* <LinkAction text="Delete" color="danger" /> */}
        </Space>
      ),
    },
  ]

  return (
    <Form
      name="service_form"
      form={form}
      onFinish={onFinish}
      autoComplete="off"
    >
      {/* Service Banner
       ***************************************/}

      {/* <div className={`${services_Banner_wrapper}`}>


                  <Form.Item
                    label="Banner Title :"
                    name="sName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your service!",
                      },
                    ]}
                  >
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="bannertext"
                      placeholder="Write title"
                    />
                  </Form.Item>

                  <div className="d-flex mt-3 justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-primary animated slideInLeft  hover_color py-md-2 px-md-4"
                    >
                      Save
                    </button>
                  </div>
                </div> */}

      {/* Services Table
       **************************************************/}

      <AdminTable
        heading={"Services"}
        columns={columns}
        data={Array.isArray(services[0]) && services[0]}
      />
      {/* <section className={`${services_table}`}>
        <div className={`${service_table_heading}`}>
          <p>Services</p>
          <button
                      type="submit"
                      className="btn btn-primary animated slideInLeft  hover_color py-md-2 px-md-4"
                      style={{
                        borderTopLeftRadius: "0px",
                        borderBottomRightRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    >
                      Add
                    </button>
        </div>
        <Table
          columns={columns}
          dataSource={Array.isArray(services[0]) ? services[0] : []}
          pagination={{
            position: ["bottomRight"],
          }}
        />
      </section> */}
    </Form>
  )
}

export default AdminServices
