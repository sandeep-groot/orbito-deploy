import * as React from "react"
import BlogPage from "../../components/BlogPage"
import Seo from "../../components/seo"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const Blog = props => {
  const { serverData } = props
  return (
    <>
      <GatsbySeo
      {...serverData}
        title="Blog"
        description="A short description for blog page goes here."
      />
      <BlogPage {...props} />
    </>
  )
}

// export const Head = () => <Seo title="Blog" />

export default Blog
