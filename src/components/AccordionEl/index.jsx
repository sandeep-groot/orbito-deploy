import React, {  useState } from "react"
import {
  acc_input,
  
  tab,
  tab_label,
  tab_content,
  tab_body,
  plusIcon,
  dashIcon,
} from "./index.module.css"
import { PlusLg, DashLg } from "../../utils/icons"

const AccordionEl = ({ item , bodyStyle }) => {
  const [isChecked, setIsChecked] = useState(item?.active || false)

  const accordionClickHandler = () => {
    setIsChecked(!isChecked)
  }


  
  return (
    <div className={`${tab}`} key={item?.key}>
            <input type="checkbox" id={`chck${item?.key}`} className={`${acc_input}`} checked={isChecked} onChange={(i) => console.log('i', i)}/>

            <label className={`${tab_label}`} htmlFor={`chck${item?.key}`} onClick={accordionClickHandler }>
              <span className={`${plusIcon} `}>
                <PlusLg size={20} />
              </span>
              <span className={`${dashIcon} `}>
                <DashLg size={20} />
              </span>
              <span className="ms-2">{item?.header}</span>
            </label>
            <div className={`${tab_content}`}>
              <div className={`${tab_body}`} style={{ ...bodyStyle }}>
                {item?.body}
              </div>
            </div>
          </div>
    
  )
}

export default AccordionEl
