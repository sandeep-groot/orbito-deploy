import axios from "axios"
import { BaseURL, UserURLS } from "../../common/constants"
import { axiosConfig } from "../../utils/functions"

export async function LoginUserAPI(payload) {
    return await axios.post(`${BaseURL}${UserURLS?.user}`, { identifier:payload.username, password:payload.password
     }, axiosConfig)
}
