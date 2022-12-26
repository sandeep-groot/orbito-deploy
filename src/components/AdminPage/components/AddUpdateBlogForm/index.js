import React, { useEffect, useState } from "react"
import AppEditor from "../AppEditor/index"
import { Form, Input, DatePicker, Upload, message, Button } from "antd"
import { Upload as UploadIcon } from "../../../../utils/icons"
import AdminButton from "../AdminButton"
import moment from "moment"
import { CreateBlogAPI, GetBlogsAPI } from "../../../../api/blogs"

const AddUpdateBlog = ({
  handleCancel,
  form,
  setBlogs,
  type,
  record,
  image,
  editorState,
  setEditorState,
  draftToHTML,
  fileList,
  setFileList,
  onUploadRemove,
  modalStatus,
  imgErr,
  setImgErr,
  descriptionErr,
  setDescriptionErr,
}) => {
  // const [descriptionErr, setDescriptionErr] = useState(null);
  // const [imgErr, setImgErr] = useState(null);

  // useEffect(() => {
  //   console.log(modalStatus);
  //   setImgErr(null);
  //   setDescriptionErr(null);
  // },[modalStatus])

  React.useEffect(() => {
    form.setFieldsValue({
      description: draftToHTML(editorState).replace(/(<([^>]+)>)/gi, ""),
    })

    if (form?.getFieldValue("description").length > 1) {
      setDescriptionErr(null)
    }
  }, [editorState])

  const checkErrors = () => {
    if (form?.getFieldValue("description").length <= 1) {
      setDescriptionErr("Please add a valid description")
    } else {
      setDescriptionErr(null)
    }

    if (fileList?.length === 0 && type !== "Update") {
      setImgErr("Please provide a blog image")
    } else {
      setImgErr(null)
    }
  }

  useEffect(() => {
    if (fileList.length) {
      setImgErr(null)
    }
  }, [fileList])

  const onBlogFinishHandler = async values => {
    if (form?.getFieldValue("description").length > 1) {
      setDescriptionErr(null)
    } else {
      return
    }

    let data = new FormData()
    const payload = {
      ...values,
      slug: values?.slug?.toLowerCase(),
      publish_date: moment(values?.publish_date)?.format(),
      description: draftToHTML(editorState),
    }

    if (record) {
      payload.blogId = record?.blogId
    }

    delete payload.blog_image

    for (var key in payload) {
      data.append(key, payload[key])
    }

    if (fileList?.length !== 0) {
      data.append("uploaded_image", fileList[0])
    } else {
      if (type !== "Update") {
        console.log("ererer")
        message.error("Please select blog file")
      }
    }

    await CreateBlogAPI(data)
      ?.then(res => {
        console.log("res", res)
        console.log(res?.response)
        if (res?.status === 200) {
          if (res?.data?.created) {
            message.success("You have successfully created your blog")
            setFileList([])
            form.resetFields()
            handleCancel()
            GetBlogsAPI().then(res => {
              setBlogs(res?.data)
            })
          } else {
            message.success("You have successfully updated your blog")
            GetBlogsAPI().then(res => {
              setBlogs(res?.data)
            })
            handleCancel()
          }
        } else {
          message.error(res?.response?.data?.message)
          return
        }

        // if (!res) {
        //   console.log(res);
        //   message.error(
        //     res?.message ||
        //       "Oops somehing went wrong while creating/updating blog"
        //   )
        //   return
        // }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onDateChange = (date, dateString) => {
    // console.log(date, dateString)
  }

  const uploadProps = {
    name: "uploaded_image",
    maxCount: 1,
    accept: "image/png, image/jpeg, image/*",

    onChange(info) {
      // if (info.file.status !== "uploading") {
      //   console.log(info.file, info.fileList)
      // }
      // if (info.file.status === "done") {
      //   message.success(`${info.file.name} file uploaded successfully`)
      // } else if (info.file.status === "error") {
      //   message.error(`${info.file.name} file upload failed.`)
      // }
    },

    beforeUpload: file => {
      setFileList([file])
      return false
    },
    fileList,
  }

  return (
    <div className="row">
      <Form
        name="blog_add_update_form"
        form={form}
        onFinish={onBlogFinishHandler}
        autoComplete="off"
      >
        <img src={`${image}`} />
        <div className="row">
          <h5 className="blog_heading mb-4 p-3">Blog Details</h5>
          <div className="col-md-6">
            <Form.Item
              name="title"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your blog name",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              name="slug"
              label="Slug"
              rules={[
                {
                  required: true,
                  message: "Please input your blog page slug",
                  whitespace: true,
                },

                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    // from 'getFieldValue("fieldName")' we can get the current value of that field.

                    if (getFieldValue("slug") === undefined) {
                      return Promise.resolve()
                    } else if (!value.includes(" ")) {
                      return Promise.resolve()
                    } else {
                      return Promise.reject(new Error("No spaces allowed"))
                    }
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Item
              name="category"
              label="Category"
              rules={[
                {
                  required: true,
                  message: "Please input your blog category",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              name="author_name"
              label="Author"
              rules={[
                {
                  required: true,
                  message: "Please input blog author",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Item
              name="publish_date"
              label="Publish Date"
              rules={[
                {
                  type: "object",
                  required: true,
                  message: "Please select publish date",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item name="blog_image" label="Blog Image">
              <Upload {...uploadProps} onRemove={onUploadRemove}>
                <Button Icon={<UploadIcon />}>
                  {type === "Add" ? "Upload Image" : "Change Image"}
                </Button>
                <span style={{ color: "red", display: "block" }}>
                  {" "}
                  {imgErr}{" "}
                </span>
              </Upload>
              {record?.blogImage && fileList?.length === 0 && (
                <p>{record?.blogImage}</p>
              )}
            </Form.Item>

            {}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Please add a description",
                },
                // ({ getFieldValue }) => ({
                //   validator(rule, value) {
                //     if (value === "") {
                //       console.log("Not value :>> ", value)
                //       // return Promise.reject(
                //       //   new Error("Please input your blog description")
                //       // )
                //     } else {
                //       console.log("value :>> ", value)
                //       return Promise.resolve()
                //     }
                //   },
                // }),
              ]}
            >
              <AppEditor
                editorState={editorState}
                setEditorState={setEditorState}
              />
              <span style={{ color: "red" }}> {descriptionErr} </span>
              <Input style={{ visibility: "hidden" }} />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <h5 className="blog_heading mb-4 p-3 mt-3">Meta Tags</h5>
          <div className="col-md-6">
            <Form.Item
              name="meta_title"
              label="Meta Title"
              rules={[
                {
                  required: true,
                  message: "Please input meta title",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="col-md-6">
            <Form.Item
              name="meta_desc"
              label="Meta Description"
              rules={[
                {
                  required: true,
                  message: "Please input meta description",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="col-md-6">
          <Form.Item
            name="meta_keywords"
            label="Meta Keywords"
            rules={[
              {
                required: true,
                message: "Please input meta keywords",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item>
            <div className="d-flex justify-content-center gap-4">
              <AdminButton
                title="Cancel"
                outline
                onButtonClick={handleCancel}
              />
              <AdminButton
                title="Save"
                onButtonClick={() => checkErrors()}
                type="submit"
              />
            </div>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default AddUpdateBlog
