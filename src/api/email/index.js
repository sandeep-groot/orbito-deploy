// import axios from "axios"
// import { BaseURL, BlogURLS } from "../../common/constants"
// import { axiosConfig } from "../../utils/functions"

// // BLOG API
// // *******

// export async function GetBlogsAPI() {
//   try {
//     console.log(axiosConfig);
//     return await axios.get(`${BaseURL}${BlogURLS?.blog}`, axiosConfig)
//   } catch (err) {
//     console.log("axios :>> ", err)
//   }
// }

// export async function GetParticularBlogAPI({ id }) {
//   try {
//     return await axios.get(`${BaseURL}${BlogURLS?.blog}/${id}`, axiosConfig)
//   } catch (err) {
//     console.log("axios :>> ", err)
//   }
// }

// export async function CreateBlogAPI(payload) {
//   console.log("payload :>> ", payload)
//   try {

//     return await axios.post(`${BaseURL}${BlogURLS?.blog}`, payload, axiosConfig)
//   } catch (err) {
//     console.log("axios :>> ", err)
//   }
// }
