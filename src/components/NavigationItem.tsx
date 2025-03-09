import { useState } from 'react'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import '../styles/components/NavItem.css'

interface props {
  title: string,
  items?: string[],
  customList?: any,
  dropdownClass?: string;
  iconSet?: 'Md' | 'Io';
}

export const NavigationItem = ({ title, items, customList, dropdownClass = 'dropdown', iconSet = 'Io' }: props) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const ArrowDownIcon = iconSet === 'Md' ? MdOutlineArrowDropDown : IoIosArrowDown;
  const ArrowUpIcon = iconSet === 'Md' ? MdOutlineArrowDropUp : IoIosArrowUp;

  const size = iconSet === 'Md' ? 24 : 16;

  return (
    <details onToggle={() => setToggle(!toggle)}>
      <summary>
        <span>{title}</span>
        {
          toggle ? <ArrowUpIcon size={size}/> : <ArrowDownIcon size={size} />
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
