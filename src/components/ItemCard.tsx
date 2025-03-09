import { useState } from "react";
import { IItem } from "../interface"
import { CardContainer } from ".";
import { QuantityInput } from "./QuantityInput";
import { BsCircleFill, BsCartFill } from "react-icons/bs"
import "../styles/components/ItemCard.css"

interface props extends IItem {
    width: string;
    height: string;
    backGroundColor?: string;
    borderColor?: string;
}

export const ItemCard = ({
    width,
    height,
    name,
    description,
    game,
    image,
    price,
    discount,
    onSale,
    onStock,
    quantity,
    backGroundColor = 'rgba(76, 96, 133, 0.15)',
    borderColor = 'rgba(76, 96, 133, 0.15)',
}: props) => {
    const [localQuantity, setLocalQuantity] = useState(quantity);


    return (
        <CardContainer
            backgroundColor={backGroundColor}
            borderColor={borderColor}
            width={width}
            height={height}
            padding="16px"
            border="none"
            boxShadow="none"
        >
            <div id="item-card-info">
                <div className="item-card-header">
                    <div className="item-card-header-information">

                        <div className="item-on-sale">
                            {
                                onSale &&
                                <BsCircleFill
                                    style={{
                                        color: onSale ? 'rgba(57, 226, 157, 1)' : 'rgba(221, 52, 52, 1)'
                                    }}
                                    className="item-indicator"
                                />
                            }
                            <span>{onSale ? 'On Sale' : ''}</span>
                        </div>


                        <div className={onStock ? "item-card-stock" : "item-card-no-stock"}>
                            <span>{onStock ? 'In stock' : 'Off stock'}</span>
                        </div>
                    </div>

                    <div className="item-card-herader-quantity">
                        <QuantityInput
                            value={localQuantity}
                            onChange={setLocalQuantity}
                        />
                    </div>
                </div>

                <img src={image} className="item-card-image" alt="item image" />

                <div className="item-card-body">

                    <div className="item-card-body-game">
                        <span>{name}</span>
                        <div className="icon-game-container">
                            <img src={game} alt={name} />
                        </div>
                    </div>

                    <div className="item-card-body-price">
                        <span>${price}</span>
                        {
                            discount &&
                            <span className="discount">${discount}</span>
                        }
                    </div>

                    <p>
                        {description}
                    </p>

                    <div className="item-card-body-buttons">
                        <button className="button details-button">
                            Details
                        </button>
                        <button className="button buy-button">
                            Add
                            <div className="cart-icon-container">
                                <BsCartFill className="input-icon-small" />
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </CardContainer>
    )
}
