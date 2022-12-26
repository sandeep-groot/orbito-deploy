import React, { useContext, useEffect, useState } from "react"
import blog_imagesin from "../../images/blog_single.jpg"
import {
  blog_image_single,
  blog_content,
  description_service_text,
  _date,
  heading_images_text2,
  icon_name2,
  client_comments2,
  quest_q2,
  client_commentname,
  comment_name,
  description_btn_cr,
  description_btn_sh,
  icons_social,
  blog_content2,
  place_image,
  post_pr,
  post_pr_des,
  post_pr_des2,
  button_services,
  icon_heading,
  search_input,
  post_pr_right,
  post_pr_des_right,
  post_pr_des_date,
  categories_impact,
  categories_number,
  text_ellipse,
} from "./index.module.css"
import {
  Folderfill,
  Personfill,
  Chatfill,
  ClockFill,
  ArrowLeftShort,
  ArrowRightShort,
  Square,
  Search,
} from "../../utils/icons"
import q_1 from "../../images/q1.png"
import place_image_sc from "../../images/place_image.jpg"
import place_image_sc2 from "../../images/place_image2.jpg"
import place_image_sc3 from "../../images/place_image3.jpg"
import place_image_sc4 from "../../images/place_image4.jpg"
import place_image_sc5 from "../../images/place_image5.jpg"
import social from "../../images/social_icons.png"
import { getParticularBlogAPI, GetBlogsAPI } from "../../api/blogs"
import { BaseURL } from "../../common/constants"
import moment from "moment"
import { StoreContext } from "../../utils/context"
import { Link, navigate } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import ReactHtmlParser from "react-html-parser"
import LoadingSpinner from "../LoadingSpinner"

const BlogDetailPage = ({ updateType, user, chatCount, location }) => {
  const [current, setCurrent] = useState(0)
  const store = useContext(StoreContext)
  const [blog, setBlog] = store?.blog
  const [blogs, setBlogs] = store?.blogs
  const [prevPost, setPrevPost] = useState(null)
  const [nextPost, setNextPost] = useState(null)
  const [loading, setLoading] = useState(true)

  const getArticle = () => {
    //const searchParam = new URLSearchParams(location?.search)
    const slug = location.pathname.split("/")[2]
    return slug
  }

  useEffect(() => {
    if (blog !== undefined) {
      let currentBlogIndex = blogs.findIndex(
        blogData => blogData?.publishDate === blog?.data?.blog?.publishDate
      )

      if (blogs[currentBlogIndex - 1] !== undefined) {
        setPrevPost(blogs[currentBlogIndex - 1])
      } else {
        setPrevPost(null)
      }

      if (blogs[currentBlogIndex + 1] !== undefined) {
        setNextPost(blogs[currentBlogIndex + 1])
      } else {
        setNextPost(null)
      }
    }
  }, [blogs, blog, location])

  useEffect(() => {
    getParticularBlogAPI(getArticle()).then(res => {
      if (res?.status === 200) setBlog(res)
    })
  }, [location])

  useEffect(() => {
    GetBlogsAPI().then(res => {
      setBlogs(
        res?.data?.sort((a, b) => {
          return moment(b.publishDate) - moment(a.publishDate)
        })
      )
    })
  }, [])

  return (
    <section>
      <GatsbySeo
        title={blog?.data?.blog?.metaTitle}
        description={blog?.data?.blog?.metaDescription}
        metaTags={[
          {
            name: "keywords",
            content: blog?.data?.blog?.seoKeywords,
          },
        ]}
      />

      <div className="container pt-2 pb-5">
        <div className="row">
          <div
            className="col-md-8 position-relative"
            style={{ minHeight: "600px" }}
          >
            {blog?.status === 200 ? (
              <div>
                <img
                  className={`img-fluid ${blog_image_single}`}
                  src={`${BaseURL}/${blog?.data?.blog?.imagePath}`}
                  alt={blog?.data?.blog?.bTitle}
                />
                <div className={`${blog_content} pt-4 px-4 pb-4`}>
                  <div className="d-flex align-items-center mb-4">
                    <div className="d-flex me-3 align-items-center">
                      <Folderfill />
                      <p className={`${icon_name2} mb-0 ms-2`}>
                        {blog?.data?.blog?.bCategory}
                      </p>
                    </div>
                    <div className="d-flex me-3 align-items-center">
                      <ClockFill />
                      <p className={`${icon_name2} mb-0 ms-2`}>
                        {moment(blog?.data?.blog?.publishDate).format("LL")}
                      </p>
                    </div>
                    <div className="d-flex me-3 align-items-center">
                      <Personfill />
                      <p className={`${icon_name2}   mb-0 ms-2`}>
                        {blog?.data?.blog?.authorName}
                      </p>
                    </div>
                    {/* <div className="d-flex me-3 align-items-center">
                      <Chatfill />
                      <p className={`${icon_name2}   mb-0 ms-2`}>5</p>
                    </div> */}
                  </div>
                  <h2 className={`${heading_images_text2}`}>
                    {blog?.data?.blog?.bTitle}
                  </h2>
                  <p className={`${description_service_text} mt-4`}>
                    {ReactHtmlParser(blog?.data?.blog?.bDescription)}
                  </p>

                  <div className="p-4 d-flex align-items-start">
                    <div className={`${quest_q2}`}>
                      <img className="img-fluid" src={q_1} alt={q_1} />
                    </div>
                    <div>
                      <p className={`${client_comments2} mb-0 ms-4`}>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, con adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut dolore magnam aliquam quaerat
                        voluptatem.
                      </p>
                      <p className={`${client_commentname} ms-4 mt-3`}>
                        -Jewel Khan
                        <span className={`${comment_name}`}>
                          , eThemestudio
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className={`${description_service_text} mt-4`}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque lau dantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciu ctetur adipisicing elit, sed
                    do eiusmod tempor incion ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                  <p className={`${description_service_text} mt-4`}>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aper erat
                    voluptatem.
                  </p>

                  {/* <div className="d-flex justify-content-between align-items-center mt-5 mb-4 global_change">
                    <div className="d-flex align-items-center mt-3">
                      <p className={`${description_btn_cr} mb-0`}>
                        Developmennt
                      </p>
                      <p className={`${description_btn_cr} ms-2 mb-0`}>Web</p>
                      <p className={`${description_btn_cr} ms-2 mb-0`}>
                        Website
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <p className={`${description_btn_sh} mb-0`}>Share</p>
                      <img
                        className={`img-fluid ${icons_social} ms-3`}
                        src={social}
                        alt={social}
                      />
                    </div>
                  </div> */}
                </div>

                {prevPost || nextPost ? (
                  <div className={`${blog_content2} px-4 pb-4 mt-4`}>
                    <div className="row">
                      {prevPost ? (
                        <div className="col-md-6 mt-4">
                          <div className="d-flex align-items-center">
                            <div>
                              <img
                                className={`img-fluid ${place_image}`}
                                src={`${BaseURL}/${prevPost?.imagePath}`}
                                alt={prevPost?.bTitle}
                              />
                            </div>
                            <div className="ms-3">
                              <div className="d-flex align-items-top">
                                <div>
                                  <ArrowLeftShort />
                                </div>
                                <div>
                                  <p className={`${post_pr} mb-0 `}>
                                    <Link to={`/blog/${prevPost?.slug}`}>
                                      Previous Post
                                    </Link>
                                  </p>
                                </div>
                              </div>
                              <p className={`${post_pr_des} mb-0`}>
                                {prevPost?.bTitle}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : null}
                      {nextPost ? (
                        <div className="col-md-6 mt-4">
                          <div className="d-flex align-items-center">
                            <div className="me-3">
                              <div className="d-flex align-items-top justify-content-end">
                                <div>
                                  <p className={`${post_pr} mb-0`}>
                                    <Link to={`/blog/${nextPost?.slug}`}>
                                      Next Post
                                    </Link>
                                  </p>
                                </div>
                                <div>
                                  <ArrowRightShort />
                                </div>
                              </div>
                              <p className={`${post_pr_des2} mb-0`}>
                                {nextPost?.bTitle}
                              </p>
                            </div>
                            <div>
                              <img
                                className={`img-fluid ${place_image}`}
                                src={`${BaseURL}/${nextPost?.imagePath}`}
                                alt={nextPost?.bTitle}
                              />
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : loading ? (
              <LoadingSpinner />
            ) : (
              <div
                style={{
                  textAlign: "center",
                  color: "var(--theme-color)",
                  fontSize: "14px",
                }}
              >
                Record does not exist
              </div>
            )}
          </div>
          <div className="col-md-4">
            {/* <div className={`${button_services}`}>
              <div className="d-flex align-items-center mb-4">
                <Square />
                <h5 className={`${icon_heading} ms-3 mb-0`}>Search</h5>
              </div>
              <div className="w-100 position-relative">
                <input
                  className={` ${search_input} form-control  bg-white border-secondary w-100 padding_input ps-4 pe-5`}
                  type="text"
                  placeholder="Search your keyword"
                  style={{ fontSize: "16px" }}
                />

                <button
                  type="button"
                  className="btn btn-link position-absolute"
                  style={{ top: "6px", right: "6px" }}
                >
                  <Search color={"#f9758f"} size={20} />
                </button>
              </div>
            </div> */}

            <div className={`${button_services}`}>
              <div className="d-flex align-items-center mb-4">
                <Square />
                <h5 className={`${icon_heading} ms-3 mb-0`}>Recent Posts</h5>
              </div>

              {blogs?.length !== 0 &&
                blogs?.slice(0, 3)?.map(blog => {
                  return (
                    <div
                      className="d-flex align-items-center mb-4"
                      onClick={() => navigate(`/blog/${blog?.slug}`)}
                      style={{ cursor: "pointer" }}
                    >
                      <div>
                        <img
                          className={`img-fluid ${place_image}`}
                          src={`${BaseURL}/${blog?.imagePath}`}
                          alt={blog?.bTitle}
                        />
                      </div>
                      <div className="ms-3">
                        <p className={`${post_pr_right} mb-0`}>
                          {blog?.bCategory}
                        </p>

                        <p
                          className={`${post_pr_des_right} ${text_ellipse} mb-0`}
                        >
                          {blog?.bTitle}
                        </p>
                        <p className={`${post_pr_des_date} mb-0`}>
                          {moment(blog?.publishDate).format("LL")}
                        </p>
                      </div>
                    </div>
                  )
                })}

              {/* <div className="d-flex align-items-center mb-4">
                <div>
                  <img
                    className={`img-fluid ${place_image}`}
                    src={place_image_sc3}
                    alt={place_image_sc3}
                  />
                </div>
                <div className="ms-3">
                  <p className={`${post_pr_right} mb-0`}>Business</p>

                  <p className={`${post_pr_des_right} mb-0`}>
                    We advocate swapping screen time fo
                  </p>
                  <p className={`${post_pr_des_date} mb-0`}>30 jun, 2022</p>
                </div>
              </div>


              <div className="d-flex align-items-center mb-4">
                <div>
                  <img
                    className={`img-fluid ${place_image}`}
                    src={place_image_sc3}
                    alt={place_image_sc3}
                  />
                </div>
                <div className="ms-3">
                  <p className={`${post_pr_right} mb-0`}>Business</p>

                  <p className={`${post_pr_des_right} mb-0`}>
                    We advocate swapping screen time fo
                  </p>
                  <p className={`${post_pr_des_date} mb-0`}>24 jun, 2022</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div>
                  <img
                    className={`img-fluid ${place_image}`}
                    src={place_image_sc5}
                    alt={place_image_sc5}
                  />
                </div>
                <div className="ms-3">
                  <p className={`${post_pr_right} mb-0`}>Digital Marketing</p>

                  <p className={`${post_pr_des_right} mb-0`}>
                    Zechsal Magnesium flakes especially
                  </p>
                  <p className={`${post_pr_des_date} mb-0`}>30 jun, 2022</p>
                </div>
              </div> */}
            </div>

            {/* <div className={`${button_services} mt-5`}>
              <div className="d-flex align-items-center mb-4">
                <Square />
                <h5 className={`${icon_heading} ms-3 mb-0`}>Categories</h5>
              </div>

              <p className={`${categories_impact}`}>
                Business <span className={`${categories_number}`}>(3)</span>
              </p>
              <p className={`${categories_impact}`}>
                Critical Analysis{" "}
                <span className={`${categories_number}`}>(2)</span>
              </p>
              <p className={`${categories_impact}`}>
                Development <span className={`${categories_number}`}>(1)</span>
              </p>
              <p className={`${categories_impact}`}>
                Digital Marketing{" "}
                <span className={`${categories_number}`}>(2)</span>
              </p>
              <p className={`${categories_impact}`}>
                Management <span className={`${categories_number}`}>(3)</span>
              </p>
              <p className={`${categories_impact}`}>
                SEO <span className={`${categories_number}`}>(2)</span>
              </p>
              <p className={`${categories_impact} border-0`}>
                Software <span className={`${categories_number}`}>(3)</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetailPage
