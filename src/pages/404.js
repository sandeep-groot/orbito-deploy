import * as React from "react"
import ErrorPage from "../components/ErrorPage"

import Seo from "../components/seo"

const NotFoundPage = props => <ErrorPage {...props} />

export const Head = () => <Seo title="Not Found" />

export default NotFoundPage
