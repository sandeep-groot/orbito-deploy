import React from "react"
import PageBanner from "../PageBanner"
import { useStaticQuery, graphql } from "gatsby"
import AppImageCard from "../AppImageCard"

const TeamMemberPage = props => {
  const teamImages = useStaticQuery(graphql`
    query {
      team1: file(relativePath: { eq: "team1.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      team2: file(relativePath: { eq: "team2.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      team3: file(relativePath: { eq: "team3.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      team4: file(relativePath: { eq: "team4.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      team5: file(relativePath: { eq: "team5.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      team6: file(relativePath: { eq: "team6.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      team7: file(relativePath: { eq: "team7.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team8: file(relativePath: { eq: "team8.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team9: file(relativePath: { eq: "team9.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team10: file(relativePath: { eq: "team10.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team11: file(relativePath: { eq: "team11.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      team12: file(relativePath: { eq: "team12.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const _TeamImages =
    teamImages && Object.keys(teamImages)?.map(team => teamImages[team])

  return (
    <>
      <PageBanner
        pageHeading={<span className="text-capitalize">Team Members</span>}
        {...props}
      />

      <div className="container py-5 mb-5">
        <div className="row">
          {Array?.isArray(_TeamImages) &&
            _TeamImages?.map(team => {
              const { fluid } = team?.childImageSharp

              return (
                <div className={`col-md-3 mt-5 text-center`} key={fluid?.src}>
                  <AppImageCard sources={fluid} alt="team member" />
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default TeamMemberPage
