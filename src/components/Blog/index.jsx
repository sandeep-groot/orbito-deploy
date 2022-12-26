import React, { useEffect, useState } from "react"
import UpdatesCard from "../UpdatesCard"
import moment from "moment/moment"
import { GetBlogsAPI } from "../../api/blogs";

const Blog = () => {

  const [blogsData, setBlogData]  = useState([]);

  useEffect(() => {

    
    GetBlogsAPI().then(res => {
      let sortedData = res?.data.sort((a, b) => {
        return moment(b.publishDate) - moment(a.publishDate)
      })
      let topThreeBlogs = sortedData.splice(0,3);
   setBlogData(topThreeBlogs);
    })

  },[])


  return (
    <section id="blog_section" className="pt-5 mt-4 mb-md-0 mt-lg-5">
      <div className="container-xxl container_expand mb-sm-0 mb-md-5">
        <div className="container">
          <div className="row">
            <p className="title text-center">FROM OUR BLOG</p>
            <h1 className={`page_heading text-center mb-5`}>
              Latest News & Updates
            </h1>
            {
              blogsData.map((blog, index) => {
                const date = moment(blog?.publishDate)
                const day = date.format("D")
                const month = date.format("MMM")
                return (
                  blog && (
                    <UpdatesCard
                    key={blog?.blogId}
                    date={day}
                    month={month}
                    updateType={blog?.bCategory}
                    user={blog?.authorName}
                    // chatCount={chatCount}
                    sources={blog?.imagePath}
                    alt={blog?.bTitle}
                    description={blog?.bTitle}
                    id={blog?.blogId}
                    slug={blog?.slug}
                    // classDescribe={blog_page_card}
                  />
                  )
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
