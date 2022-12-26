import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"

const SSR = ({ serverData }) => {
  return (
    <>
      <Link to="/">Go back to the homepage</Link>
    </>
  )
}

export const Head = () => <Seo title="SSR" />

export default SSR
