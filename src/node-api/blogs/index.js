const axios = require("axios")
const { BaseURL, BlogURLS } = require("../constants")

// BLOG API
// *******

const axiosConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
}

const GetBlogsAPI = async () => {
  try {
    return await axios.get(`${BaseURL}${BlogURLS?.blog}`, axiosConfig)
  } catch (err) {
    console.log("axios :>> ", err)
  }
}

module.exports = {
  GetBlogsAPI,
}
