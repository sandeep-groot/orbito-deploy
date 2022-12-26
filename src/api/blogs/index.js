import axios from "axios"
import { BaseURL, BlogURLS } from "../../common/constants"
import { axiosConfig } from "../../utils/functions"

// BLOG API
// *******

export async function GetBlogsAPI() {
  try {
    console.log(axiosConfig)
    return await axios.get(`${BaseURL}${BlogURLS?.blog}`, axiosConfig)
  } catch (err) {
    console.log("axios :>> ", err)
  }
}

export async function GetParticularBlogAPI({ id }) {
  try {
    return await axios.get(`${BaseURL}${BlogURLS?.blog}/${id}`, axiosConfig)
  } catch (err) {
    console.log("axios :>> ", err)
  }
}

export async function CreateBlogAPI(payload) {
  console.log("payload :>> ", payload)
  try {
    // const config = {
    //   headers: {
    //     "content-type":
    //       "multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s",
    //   },
    // }
    return await axios.post(`${BaseURL}${BlogURLS?.blog}`, payload, axiosConfig)
  } catch (err) {
    return err
  }
}

export async function deleteBlogAPI(payload) {
  try {
    return await axios.delete(
      `${BaseURL}${BlogURLS?.blog}/${payload?.blogId}`,
      axiosConfig
    )
  } catch (err) {}
}

export async function getBlogImageAPI(imagePath) {
  try {
    return await axios.get(`${BaseURL}/${imagePath}`, axiosConfig)
  } catch (err) {}
}

export async function getParticularBlogAPI(payload) {
  try {
    return await axios.get(
      `${BaseURL}${BlogURLS?.blog}/${payload}`,
      axiosConfig
    )
  } catch (err) {}
}
