import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import '../styles/components/NavItem.css'

interface props {
  title: string,
  items?: string[],
  customList?: any
}

export const NavigationItem = ({ title, items, customList }: props) => {

  const [toggle, setToggle] = useState<boolean>(false);


  return (
    <details onToggle={() => setToggle(!toggle)}>
      <summary>
        {title}
        {
          toggle ? <IoIosArrowUp /> : <IoIosArrowDown />
        }
      </summary>
      <ul className='dropdown'>
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
