import React, { useState } from "react";
import "../Store/Store.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { Carousel } from "react-bootstrap";
import "./Store.css"
const { getData } = require("../../db/db");
const foods = getData();

function Store({ food, onAdd, onRemove, cartItems }) {
    const [count, setCount] = useState(0);
    const { title, Image, price, id} = food;

    function inBracket(id) {
        if (cartItems.lenght == 0) {
            return 0
        }
        else {
            for(var i = 0; i < cartItems.lenght; i++){
                if (cartItems[i].id === id){
                    return cartItems[i].quantity
                }
            }
        return 0  
        }
    }

    const handleIncrement = () => {
        setCount(count + 1);
        onAdd(food);
    };
    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(food);
    };
    return (

        <>
            <Carousel variant="dark" indicators={false} interval={null}>
                {food.map((food) => {
                    return (
                        <Carousel.Item key={food.id}>

                            <img
                            className="d-block"
                            width={'100%'}
                            // height={'100%'}
                            src={food['Image']}

                            alt="First slide"
                            />
                            <div className="carouselItem">
                            
                            <div className="textInCarousel">
                            {food['title']}
                            <br/>
                            ₽{food['price']}   
                            </div>
                            <div className="buttonCarouselSection">
                                <button className='buttonCarousel'>Купить</button>
                            </div>
                        </div>
                        </Carousel.Item>
                    );
                    }
                    )
                }
                </Carousel>
            <div className="preItemsBlock">
                <div className="textInBlock">
                    Товары
                </div>
            </div>
            <div className="cards__container">
                {food.map((food) => {
                    return (
                    <Card countInBracket={inBracket(food.id)} food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
                    );
                })}
            </div>
        </>
    );
};

export default Store;