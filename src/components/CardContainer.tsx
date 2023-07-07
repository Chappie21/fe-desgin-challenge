import { PropsWithChildren} from 'react'
import '../styles/components/CardContainer.css'

export const CardContainer = ({ children }:PropsWithChildren) => {
  return (
    <div className='card-container'>
        {children}
    </div>
  )
}
