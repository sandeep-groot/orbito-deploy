import * as React from "react"
import BlogPage from "../components/BlogPage"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql } from "gatsby"

const Blog = props => {
  return (
    <>
      <GatsbySeo
        title="Blog"
        description="A short description for blog page goes here."
      />
      <BlogPage {...props} blogs={props?.data?.allBlogs?.edges} />
    </>
  )
}

// export const Head = () => <Seo title="Blog" />

export default Blog

export const blogs = graphql`
  query {
    allBlogs {
      edges {
        next {
          slug
          bTitle
        }
        previous {
          bTitle
          slug
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
