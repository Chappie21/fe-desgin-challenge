import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
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
          toggle ? <IoIosArrowUp size={16}/> : <IoIosArrowDown size={16} />
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
