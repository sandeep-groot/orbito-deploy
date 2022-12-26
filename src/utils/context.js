import React from "react"

export const StoreContext = React.createContext(null)

export default ({ children }) => {
  const [services, setServices] = React.useState([])
  const [service, setService] = React.useState([])
  const [appLinks, setAppLinks] = React.useState({})
  const [help, setHelp] = React.useState([])
  const [seo, setSeo] = React.useState({})
  const [blogs, setBlogs] = React.useState([])
  const [blog, setBlog] = React.useState("")

  const store = {
    services: [services, setServices],
    service: [service, setService],
    appLinks: [appLinks, setAppLinks],
    help: [help, setHelp],
    seo: [seo, setSeo],
    blogs: [blogs, setBlogs],
    blog: [blog, setBlog],
  }
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
