import axios from "axios"
import { BaseURL, AppServicesURLS, EmailURLS } from "../../common/constants"
import { axiosConfig } from "../../utils/functions"

export async function GetAllServices() {
  try {
    return await axios.get(`${BaseURL}${AppServicesURLS?.allServices}`, axiosConfig)
  } catch (err) {
    console.log("axios :>> ", err)
  }
}

export async function GetServiceAPI() {
  try {
    return await axios.get(`${BaseURL}${AppServicesURLS?.service}`, axiosConfig)
  } catch (err) {
    console.log("axios :>> ", err)
  }
}

export async function AddUpdateService(body) {
  try {
    return await axios.post(`${BaseURL}${AppServicesURLS?.service}`, {
      ...body,
    }, axiosConfig)
  } catch (err) {
    console.log("axios :>> ", err)
  }
}

export async function SendEmailAPI(body) {
  try {
    return await axios.post(`${BaseURL}${EmailURLS?.email}`, {
      ...body,
    }, axiosConfig)
  } catch (err) {
    console.log("axios :>> ", err)
  }
}
