import React from "react"
import BlogDetailPage from "../../components/BlogDetailPage"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import Seo from "../../components/seo"

const BlogDetail = props => {
  const { serverData } = props
  return (
    <>
      {/* <GatsbySeo
        {...serverData}
        title="Blog Detail"
        description="A short description for blog detail page goes here."
      /> */}
      <BlogDetailPage {...props} />
    </>
  )
}

// export const Head = () => <Seo title="Blog Detail" />

export default BlogDetail

// export async function getServerData() {
//   try {
//     return {
//       status: 200,
//       headers: {},
//       props: {
//         title: "Blog Detail",
//         description: "A short description for blog detail page goes here.",
//       },
//     }
//   } catch (error) {
//     return {
//       status: 500,
//       headers: {},
//       props: {},
//     }
//   }
// }
