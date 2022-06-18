import React, { useState } from "react";
import "../Store/Store.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
const { getData } = require("../../db/db");
const foods = getData();

function Store({ food, onAdd, onRemove, cartItems }) {
    const [count, setCount] = useState(0);
    const { title, Image, price, id } = food;

    function inBracket(id) {
        console.log(cartItems.lenght)
        if (cartItems.lenght == 0) {
            console.log("000")
            return 0
        }
        else {
            for(var i = 0; i < cartItems.lenght; i++){
                if (cartItems[i].id === id){
                    console.log("222")
                    return cartItems[i].quantity
                }
                console.log("333")
            }
        console.log("444")  
        return 0  
        }

        // console.log(cartItems)
        // for(var i = 0; i < 5; i++){
        //     console.log(i)
        // }
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
            <h1 className="heading">Заказ кроссовок </h1>
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