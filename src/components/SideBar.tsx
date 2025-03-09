import { NavItems } from "../mock";
import { IoCloseOutline } from "react-icons/io5";
import { NavigationItem } from "./NavigationItem";
import "../styles/components/SideBar.css";

interface props {
    handleClose: () => void;
}


export const SideBar = ({ handleClose }: props) => {
    return (
        <aside id="sidebar">
            <header>
                <button className="button close" onClick={handleClose}>
                    <IoCloseOutline />
                    <span>Close</span>
                </button>
            </header>

            {/* Navigation items */}
            <section>
                {
                    NavItems.map((navItem, index) => (
                        <NavigationItem 
                            key={index}
                            title={navItem.title}
                            dropdownClass='dropdown-side'
                            items={navItem.childrens}
                        />
                    ))
                }
            </section>
        </aside>
    )
}
