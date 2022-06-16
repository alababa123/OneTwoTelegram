import React, { useState } from "react";
import "../Store/Store.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
const { getData } = require("../../db/db");
const foods = getData();

function Store({ food, onAdd, onRemove }) {
    const [count, setCount] = useState(0);
    const { title, Image, price, id } = food;

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
            <h1 className="heading">Заказ кроссовок</h1>
            <div className="cards__container">
                {food.map((food) => {
                    return (
                    <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
                    );
                })}
            </div>
        </>
    );
};

export default Store;