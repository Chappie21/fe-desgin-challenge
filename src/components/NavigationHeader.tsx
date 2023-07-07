import { useState } from "react"
import "../styles/NavBar.css"
import { NavigationItem } from "./NavigationItem";
import { NavItems } from "../mock";
import { currencies } from "../mock/CurrencyList";

export const NavigationHeader = () => {

    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    return (
        <header>
            <nav className="navbar">
                <section className="sec-1">
                    <img src="../../public/chicks-logo-large.svg" alt="logo" />
                    <button className="burger" onClick={() => setShowSidebar(true)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </section>

                <section className="sec-2">
                    <ul className={`sidebar ${showSidebar ? 'sidebar--visible' : ''}`}>
                        {
                            NavItems.map((item, index) =>
                                <li className="item" key={index}>
                                    <NavigationItem
                                        title={item.title}
                                        items={item.childrens}
                                    />
                                </li>
                            )
                        }
                    </ul>
                </section>

                <section className="sec-3">
                    <div>
                        <details>
                            <summary className="item">
                                USD
                            </summary>
                            <ul className="">
                                {
                                    currencies.map((currency, index) => 
                                        <li className="" key={index}>
                                            <img src={currency.flag} alt={currency.name} />
                                            <span>{currency.name}</span>
                                        </li>
                                    )
                                }
                            </ul>

                        </details>
                    </div>

                    <div>
                        <div>
                            
                        </div>

                        <button className="buy-button">
                            Sign in
                        </button>
                    </div>
                </section>
            </nav>
        </header>
    )
}