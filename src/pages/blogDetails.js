import React, { useContext, useEffect } from "react"
import BlogDetailPage from "../components/BlogDetailPage"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql } from "gatsby"
// import { getParticularBlogAPI, GetBlogsAPI } from "../api/blogs"
// import { StoreContext } from "../utils/context"

// import Seo from "../components/seo"

const BlogDetail = props => {
  const { pageContext, location } = props

  // const store = useContext(StoreContext)
  // const [blog, setBlog] = store?.blog
  // const [blogs, setBlogs] = store?.blogs

  // const getArticle = () => {
  //   //const searchParam = new URLSearchParams(location?.search)

  //   // const searchParam = new URLSearchParams(location?.search)
  //   // return searchParam?.has("type") && searchParam?.get("type")
  //   // const slug = location.pathname.split("/")[2]
  //   // return slug
  // }

  // const _blog = blogs?.find(blog => blog?.slug === getArticle())

  return (
    <>
      <GatsbySeo
        title={pageContext?.blog?.metaTitle}
        description={pageContext?.blog?.metaDescription}
        metaTags={[
          {
            name: "keywords",
            content: pageContext?.blog?.seoKeywords,
          },
        ]}
      />

      <BlogDetailPage
        {...props}
        blog={props?.data?.blogs}
        blogs={props?.data?.allBlogs?.edges}
      />
    </>
  )
}

export default BlogDetail

export const blog = graphql`
  query ($slug: String) {
    blogs(slug: { eq: $slug }) {
      authorName
      bCategory
      bDescription
      bTitle
      blogId
      blogImage
      createdAt(locale: "en")
      id
      imagePath
      metaDescription
      metaTitle
      mimeType
      publishDate(locale: "en")
      seoKeywords
      slug
      updatedAt(locale: "en")
    }

    allBlogs {
      edges {
        next {
          slug
          bTitle
          imagePath
        }
        previous {
          bTitle
          slug
          imagePath
        }
        node {
          authorName
          bCategory
          bDescription
          bTitle
          blogId
          blogImage
          id
          imagePath
          metaDescription
          metaTitle
          mimeType
          publishDate(locale: "en")
          seoKeywords
          slug
          updatedAt(locale: "en")
        }
      }
    }
  }
`
