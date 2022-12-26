import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AppImageCard from "../AppImageCard"
import { top_image_margin } from "./index.module.css"

const Team = () => {
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
    }
  `)

  const _TeamImages =
    teamImages && Object.keys(teamImages)?.map(team => teamImages[team])

  return (
    <section
      id="offered_services"
      className="container-xxl container_expand py-3"
    >
      <div className="container text-center">
        <div className="row justify-content-center py-3">
          <div className="col-md-7 col-lg-5">
            <p className="title text-center">TEAM MEMBERS</p>
            <h1 className={`page_heading text-center mb-4`}>
              Amazing Team Members
            </h1>
            <p className={`description text-center margin_team_text`}>
              Mation ullamco laboris nisi ut aliquip exea core dolor in repre
              hender fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div className="row">
          {Array?.isArray(_TeamImages) &&
            _TeamImages?.map(team => {
              const { fluid } = team?.childImageSharp

              return (
                <div
                  className={`col-md-3 ${top_image_margin} text-center`}
                  key={fluid?.src}
                >
                  <AppImageCard sources={fluid} alt="team member" />
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Team
