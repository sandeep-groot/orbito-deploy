import React, { useContext, useEffect } from "react"
import BlogDetailPage from "../components/BlogDetailPage"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { getParticularBlogAPI, GetBlogsAPI } from "../api/blogs"
import { StoreContext } from "../utils/context"

import Seo from "../components/seo"

const BlogDetail = props => {
  const { serverData, location } = props
  const store = useContext(StoreContext)
  const [blog, setBlog] = store?.blog
  const [blogs, setBlogs] = store?.blogs

  const getArticle = () => {
    //const searchParam = new URLSearchParams(location?.search)

    const searchParam = new URLSearchParams(location?.search)
    return searchParam?.has("type") && searchParam?.get("type")
    // const slug = location.pathname.split("/")[2]
    // return slug
  }

  const _blog = blogs?.find(blog => blog?.slug === getArticle())

  return (
    <>
      <GatsbySeo
        title={_blog?.metaTitle}
        description={_blog?.metaDescription}
        metaTags={[
          {
            name: "keywords",
            content: _blog?.seoKeywords,
          },
        ]}
      />

      <BlogDetailPage {...props} />
    </>
  )
}

// export const Head = () => <Seo title="Blog Detail" />

export default BlogDetail
