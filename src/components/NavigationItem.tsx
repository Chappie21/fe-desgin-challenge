import { useState } from 'react'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import '../styles/components/NavItem.css'

interface props {
  title: string,
  items?: string[],
  customList?: any,
  dropdownClass?: string;
}

export const NavigationItem = ({ title, items, customList, dropdownClass = 'dropdown' }: props) => {

  const [toggle, setToggle] = useState<boolean>(false);


  return (
    <details onToggle={() => setToggle(!toggle)}>
      <summary>
        <span>{title}</span>
        {
          toggle ? <MdOutlineArrowDropUp size={24}/> : <MdOutlineArrowDropDown size={24} />
        }
      </summary>
      <ul className={dropdownClass}>
        {
          !customList 
          ?
            items?.map((item, index) => <li key={index}>{item}</li>)
          : customList
        }
      </ul>
    </details>
  )
}
