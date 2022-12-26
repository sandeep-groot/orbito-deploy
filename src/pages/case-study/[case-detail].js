import { GatsbySeo } from "gatsby-plugin-next-seo"
import * as React from "react"
import { Container } from "react-bootstrap"
import CaseStudyDetailPage from "../../components/CaseStudyDetail"

import Seo from "../../components/seo"

const CaseStudyDetail = props => {
  const { serverData } = props

  return <Container>
    <GatsbySeo
      {...serverData}
        title="Casestudy Detail"
        description="A short description for case study page goes here."
      />
<CaseStudyDetailPage {...props} />
  </Container> 
}

export const Head = () => <Seo title="Case study detail" />

export default CaseStudyDetail

