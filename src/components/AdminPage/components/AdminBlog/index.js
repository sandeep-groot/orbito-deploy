import React, { useState } from "react"
import { Form, message, Space, Popconfirm } from "antd"
import LinkAction from "../../../AntComponents/LinkAction"
import AdminTable from "../AdminTable"
import { GetBlogsAPI, deleteBlogAPI } from "../../../../api/blogs"
import { PencilSquare, Trash } from "../../../../utils/icons"
import AdminModal from "../AdminModal"
import AddUpdateBlog from "../AddUpdateBlogForm"
import moment from "moment"
import {
  Editor,
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from "draft-js"
import draftToHtml from "draftjs-to-html"
import axios, { isCancel, AxiosError } from "axios"

const AdminBlog = () => {
  const [form] = Form.useForm()
  const [blogform] = Form.useForm()
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  )
  const [fileList, setFileList] = useState([])
  const [imgErr, setImgErr] = useState(null)

  const [blogs, setBlogs] = useState([])
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [image, setImage] = useState("")
  const [imgError, setImgError] = useState(null)
  const [descriptionError, setDescriptionError] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState({
    type: "",
    status: false,
  })

  const onUploadRemove = file => {
    const index = fileList.indexOf(file)
    const newFileList = fileList.slice()
    newFileList.splice(index, 1)
    setFileList(newFileList)
    form.setFieldsValue({ blog_image: "" })
  }

  React.useEffect(() => {
    if (isModalOpen?.type === "Add") {
      setEditorState(EditorState.createEmpty())
      blogform.setFieldsValue({
        publish_date: null,
      })
    }
  }, [isModalOpen?.type])

  // React.useEffect(() => {
  //   console.log(
  //     "editorState :>> ",
  //     draftToHTML(editorState).replace(/(<([^>]+)>)/gi, "")
  //   )
  // }, [editorState])

  function arrayBufferToBase64(buffer) {
    var binary = ""
    var bytes = new Uint8Array(buffer)
    var len = bytes.byteLength
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
  }

  const draftToHTML = editorState => {
    const rawContentState = convertToRaw(editorState.getCurrentContent())
    return draftToHtml(rawContentState)
  }

  const htmlToDraft = htmlData => {
    const blocksFromHTML = convertFromHTML(`${htmlData}`)
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    )
    return EditorState.createWithContent(state)
  }

  const toBase64 = data =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      // const blob = new Blob(data, { type: "image/png" })
      reader.readAsDataURL(data)
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })

  // const toBase64 = file =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader()
  //     reader.readAsDataURL(file)
  //     reader.onload = () => resolve(reader.result)
  //     reader.onerror = error => reject(error)
  //   })

  React.useEffect(() => {
    blogform.setFieldsValue({
      slug: selectedBlog?.slug?.toLowerCase(),
      blogId: selectedBlog?.blogId,
      title: selectedBlog?.bTitle,
      // description: draftToHTML(editorState).replace(/(<([^>]+)>)/gi, ""),
      category: selectedBlog?.bCategory,
      blog_image: selectedBlog?.blogImage,
      author_name: selectedBlog?.authorName,
      publish_date: moment(selectedBlog?.publishDate),
      meta_title: selectedBlog?.metaTitle,
      meta_desc: selectedBlog?.metaDescription,
      meta_keywords: selectedBlog?.seoKeywords,
    })

    setEditorState(htmlToDraft(selectedBlog?.bDescription))
  }, [selectedBlog])

  const handleCancel = () => {
    setIsModalOpen({
      ...isModalOpen,
      type: "",
      status: false,
    })

    setSelectedBlog(null)
    onUploadRemove()
    blogform.resetFields()
    setImgError(null)
    setDescriptionError(null)
  }

  React.useEffect(() => {
    GetBlogsAPI().then(res => {
      setBlogs(res?.data)
    })
  }, [])

  const addBlogHandler = () => {
    setIsModalOpen({
      type: "Add",
      status: true,
    })
  }

  const updateBlogHandler = record => {
    setIsModalOpen({
      type: "Update",
      status: true,
    })

    setSelectedBlog(record)
  }

  const deleteBlogHandler = record => {
    deleteBlogAPI(record).then(res => {
      if (res?.data?.blog) {
        message.success(res?.data?.message)
        GetBlogsAPI().then(res => {
          setBlogs(res?.data)
        })
      } else {
        message.error("Oops something went wrong !")
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
      dataIndex: "bTitle",
      key: "bTitle",

      render: text => <p className="text-bold">{text}</p>,
    },
    // {
    //   title: "Description",
    //   dataIndex: "bDescription",
    //   key: "bDescription",
    // },

    {
      title: "Action",
      key: "action",

      render: (_, record) => (
        <Space size="middle">
          <LinkAction
            text="Update"
            Icon={PencilSquare}
            onClick={() => updateBlogHandler(record)}
          />
          <Popconfirm
            title="Do you want to delete this blog?"
            onConfirm={() => deleteBlogHandler(record)}
            okText="Yes"
            cancelText="No"
          >
            <LinkAction text="Delete" Icon={Trash} color="danger" />
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <>
      <Form name="blog_table_form" form={form} onFinish={""} autoComplete="off">
        {/* Blog Banner
         ***************************************/}

        <button
          type="button"
          onClick={() => {
            axios.post(
              "https://api.github.com/repos/sandeep-groot/gatsbytesting/dispatches",
              {
                event_type: "orbitowebhook",
              },
              {
                Accept: "application/vnd.github.everest-preview+json",
                Authorization:
                  "Bearer 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",
                "Content-Type": "application/json",
              }
            )
          }}
        >
          Trigger
        </button>

        {/* Blog Table
         **************************************************/}

        <AdminTable
          heading={"Blogs"}
          columns={columns}
          data={Array.isArray(blogs) && blogs}
          onAdd={addBlogHandler}
        />
      </Form>

      <AdminModal
        title={`${isModalOpen?.type} Blog`}
        isModalOpen={isModalOpen?.status}
        onCancel={handleCancel}
        body={
          <AddUpdateBlog
            handleCancel={handleCancel}
            form={blogform}
            setBlogs={setBlogs}
            type={isModalOpen?.type}
            record={selectedBlog}
            image={image}
            editorState={editorState}
            setEditorState={setEditorState}
            draftToHTML={draftToHTML}
            setFileList={setFileList}
            fileList={fileList}
            onUploadRemove={onUploadRemove}
            modalStatus={isModalOpen}
            imgErr={imgError}
            descriptionErr={descriptionError}
            setImgErr={setImgError}
            setDescriptionErr={setDescriptionError}
          />
        }
      />
    </>
  )
}

export default AdminBlog
