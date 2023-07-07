import { IItem } from "../interface"
import { ItemCard } from ".";
import "../styles/components/ListItems.css"


interface props {
    items: IItem[];
}

export const ListItems = ({items}:props) => {
  return (
    <div id="list-items">
        {
            items.map((items) => (
                <ItemCard
                    key={items.id}
                    {...items}
                />
            ))
        }
    </div>
  )
}
