import * as React from "react"
import Seo from "../components/seo"
import TeamMemberPage from "../components/TeamMemberPage"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const Team = props => {
  const { serverData } = props
  return (
    <>
      <GatsbySeo
      {...serverData}
        title="Team"
        description="A short description for Team page goes here."
      />
      <TeamMemberPage {...props} />
    </>
  )
}

// export const Head = () => <Seo title="Team" />

export default Team
