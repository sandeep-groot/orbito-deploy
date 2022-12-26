import React, { useEffect, useState, useContext } from "react"
import UpdatesCard from "../UpdatesCard"
import { useStaticQuery, graphql } from "gatsby"
import PageBanner from "../PageBanner"
import {
  pagination,
  numbering,
  numbering_1,
  blog_page_card,
  linkClass,
  activeLinkClass,
} from "./index.module.css"
import { ChevronRight, ChevronLeft } from "../../utils/icons"
import { GetBlogsAPI } from "../../api/blogs"
import moment from "moment"
import Pagination from "react-js-pagination"
import paginate from "../../utils/functions"
import { StoreContext } from "../../utils/context"

const BlogPage = props => {
  const { blogs } = props

  // const store = useContext(StoreContext)
  const [paginatedData, setPaginatedData] = useState([])
  const [activePage, setActivePage] = useState(1)
  // const [blogs, setBlogs] = store?.blogs

  // useEffect(() => {
  //   GetBlogsAPI().then(res => {
  //     setBlogs(
  //       res?.data?.sort((a, b) => {
  //         return moment(b.publishDate) - moment(a.publishDate)
  //       })
  //     )
  //   })
  // }, [])

  useEffect(() => {
    const paginatedBlogs = paginate(blogs, 9, activePage)
    setPaginatedData(paginatedBlogs)
  }, [activePage, blogs])

  const handlePageChange = pageNumber => {
    //console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber)
  }

  // const blogImage = useStaticQuery(graphql`
  //   query {
  //     blog1: file(relativePath: { eq: "blog_1.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }

  //     blog2: file(relativePath: { eq: "blog_2.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }

  //     blog3: file(relativePath: { eq: "blog_3.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     blog4: file(relativePath: { eq: "blog_2.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     blog5: file(relativePath: { eq: "blog_2.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     blog6: file(relativePath: { eq: "blog_2.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     blog7: file(relativePath: { eq: "blog_2.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     blog8: file(relativePath: { eq: "blog_2.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     blog9: file(relativePath: { eq: "blog_2.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  // let blogs = blogImage && Object.keys(blogImage)?.map(blog => blogImage[blog])

  // blogs = blogs?.map((blog, i) => {
  //   return {
  //     ...blog,
  //     data: blogInfo[i],
  //   }
  // })

  return (
    <>
      <PageBanner pageHeading={<span>Our Blog</span>} {...props} />
      <section id="blog_section" className="pt-5 mb-md-0">
        <div className="container-xxl container_expand mb-sm-0 mb-md-5">
          <div className="container">
            <div className="row">
              {Array?.isArray(paginatedData) &&
                paginatedData?.map(blog => {
                  const date = moment(blog?.node?.publishDate)
                  const day = date.format("D")
                  const month = date.format("MMM")

                  return (
                    blog && (
                      <UpdatesCard
                        key={blog?.node?.blogId}
                        date={day}
                        month={month}
                        updateType={blog?.node?.bCategory}
                        user={blog?.node?.authorName}
                        // chatCount={chatCount}
                        sources={blog?.node?.imagePath}
                        alt={blog?.node?.bTitle}
                        description={blog?.node?.bTitle}
                        id={blog?.node?.blogId}
                        slug={blog?.node?.slug}
                        // classDescribe={blog_page_card}
                      />
                    )
                  )
                })}
              {blogs?.length ? (
                <div className="d-flex justify-content-center">
                  <Pagination
                    linkClass={`${linkClass}`}
                    activeLinkClass={`${activeLinkClass}`}
                    activePage={activePage}
                    itemClass={`${numbering} d-flex justify-content-center align-items-center`}
                    itemsCountPerPage={9}
                    activeClass={`${numbering_1} d-flex justify-content-center align-items-center`}
                    prevPageText={
                      <div
                        className={`${numbering} d-flex justify-content-center align-items-center`}
                      >
                        <ChevronLeft size={18} color="#00c0ff" />
                      </div>
                    }
                    nextPageText={
                      <div
                        className={`${numbering} d-flex justify-content-center align-items-center`}
                      >
                        {" "}
                        <ChevronRight size={18} color="#00c0ff" />
                      </div>
                    }
                    totalItemsCount={blogs?.length}
                    pageRangeDisplayed={10}
                    hideFirstLastPages={true}
                    onChange={number => handlePageChange(number)}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
