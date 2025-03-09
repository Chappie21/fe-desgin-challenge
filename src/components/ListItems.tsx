import { IItem } from "../interface"
import { ItemCard } from ".";
import "../styles/components/ListItems.css"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


interface props {
    items: IItem[];
}

export const ListItems = ({ items }: props) => {
    return (
        <div id="list-items-container">
            <div className="items-grid">
                {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        width="100%"
                        height="20.5em"
                        {...item}
                    />
                ))}
            </div>
            
            <footer className="paginatior-footer">
                <ul>
                    <li className="page button-row">
                        <IoIosArrowBack />
                    </li>
                    <li className="page">1</li>
                    <li className="page">2</li>
                    <li className="page">3</li>
                    <li className="page">4</li>
                    <li className="page">...</li>
                    <li className="page">11</li>
                    <li className="page button-row">
                        <IoIosArrowForward />
                    </li>
                </ul>
            </footer>
        </div>
    )
}
