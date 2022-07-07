import React, { useState } from "react";
import "../Store/Store.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { Carousel } from "react-bootstrap";
import "./Store.css"
const { getData } = require("../../db/db");
const sneakers = getData();

function Store({ sneaker, onAdd, onRemove, cartItems }) {
    const [count, setCount] = useState(0);
    const { title, Image, price, id} = sneaker;

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
        onAdd(sneaker);
    };
    const handleDecrement = () => {
        setCount(count - 1);
        onRemove(sneaker);
    };
    return (

        <>
            <Carousel variant="dark" indicators={false} interval={null}>
                {sneaker.map((sneaker) => {
                    return (
                        <Carousel.Item key={sneaker.id}>

                            <img
                            className="d-block"
                            width={'100%'}
                            // height={'100%'}
                            src={sneaker['Image']}

                            alt="First slide"
                            />
                            <div className="carouselItem">
                            
                            <div className="textInCarousel">
                            {sneaker['title']}
                            <br/>
                            ₽{sneaker['price']}   
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
                {sneaker.map((sneaker) => {
                    return (
                    <Card countInBracket={inBracket(sneaker.id)} sneaker={sneaker} key={sneaker.id} onAdd={onAdd} onRemove={onRemove} />
                    );
                })}
            </div>
        </>
    );
};

export default Store;