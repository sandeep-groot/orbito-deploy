import React from "react"
import { Display, PenciSquare, Gear, TV as Tv } from "../../../../utils/icons"
import { our_process, heading, description } from "./index.module.css"
import ProcessCard from "./ProcessCard"

const OurProcess = () => {
  const processes = [
    {
      Icon: Display,
      count: "2",
      title: "Idea Generation",
      description:
        "Bempor incididunt ut labore et gna aliqus aute irure dolor in repderit in velit",
    },
    {
      Icon: PenciSquare,
      count: "4",
      title: "Scatch & Wireframe",
      description:
        "Bempor incididunt ut labore et gna aliqus aute irure dolor in repderit in velit",
    },
    {
      Icon: Gear,
      count: "1",
      title: "Development",
      description:
        "Bempor incididunt ut labore et gna aliqus aute irure dolor in repderit in velit",
    },
    {
      Icon: Tv,
      count: "3",
      title: "Final Implementation",
      description:
        "Bempor incididunt ut labore et gna aliqus aute irure dolor in repderit in velit",
    },
  ]
  return (
    <section
      id={`${our_process}`}
      className="container-xxl container_expand padding_inner_pr margin_services"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <p className="title text-center">OUR PROCESS</p>
            <h1 className={`page_heading text-center mb-4 ${heading}`}>
              How It Works
            </h1>
            <p className={`description text-center ${description}`}>
              Mation ullamco laboris nisi ut aliquip exea core dolor in repre
              hender fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div className="row">
          {processes &&
            processes?.map(process => {
              const { Icon, count, title, description } = process
              return (
                <ProcessCard
                  key={title}
                  Icon={Icon}
                  count={count}
                  title={title}
                  description={description}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default OurProcess
