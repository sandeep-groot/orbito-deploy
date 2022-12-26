import * as React from "react"
import PropTypes from "prop-types"
import { header } from "./index.module.css"
import Nav from "../Nav"
import { GetAllServices } from "../../api/services"
import { StoreContext } from "../../utils/context"
import { GetBlogsAPI } from "../../api/blogs"

const Header = props => {
  const { services } = React.useContext(StoreContext)
  const [_, setService] = services

  React.useEffect(() => {
    GetAllServices().then(res => {
      if (res?.data?.services) {
        setService(prev => {
          return [...prev, ...res?.data?.services]
        })
      }
    })
  }, [])
  return (
    <header className={`${header}`}>
      <Nav {...props} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {}

export default Header
