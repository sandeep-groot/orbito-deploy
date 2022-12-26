import { getGeo } from "geoplugin"

export async function GetCountryAPI() {
  try {
    return await getGeo()
  } catch (err) {
    console.log("getGeo API Err", err)
  }
}
