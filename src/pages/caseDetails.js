import * as React from "react"
import CaseStudyDetailPage from "../components/CaseStudyDetail"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Seo from "../components/seo"

const CaseStudyDetail = props => {
  const { serverData } = props
  return (
    <>
      <GatsbySeo
      {...serverData}
        title="Case study Detail"
        description="A short description for case study detail page goes here."
      />
      <CaseStudyDetailPage {...props} />
    </>
  )
}

// export const Head = () => <Seo title="Case study detail" />

export default CaseStudyDetail
