import * as React from "react"
import CaseStudyPage from "../../components/CaseStudyPage"
import Seo from "../../components/seo"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const CaseStudy = props => {
  const { serverData } = props
  return (
    <>
      <GatsbySeo
      {...serverData}
        title="Case study"
        description="A short description for case study page goes here."
      />
      <CaseStudyPage {...props} />
    </>
  )
}

// export const Head = () => <Seo title="Case study" />

export default CaseStudy
