import React from "react";
import "../Store/Store.css";
import Card from "../Card/Card";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Store.css"
import { useState } from "react";
import FilterModal from "../Modal/FilterModal"

// const { getData } = require("../../db/db");

function Store({ edit_filters, getData, onAdd, onRemove, cartItems, onAddFilter, onRemoveFilter, filter }) {

    let sneakers = getData(filter);

    // const [sneakers, setSneakers] = useState(sneaker)

    const [reloadState, setReloadState] = useState(0)

    const Reload = () => {
        
        if (reloadState == 1) {
            setReloadState(0);
        }
        else{
            setReloadState(1);
        }
    }

    // console.log(sneaker, filter);

    function inBracket(id) {
        if (cartItems.lenght === 0) {
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

    return (

        <>
            <Carousel variant="dark" indicators={false} interval={null}>
                {sneakers.map((sneakers) => {
                    return (
                        <Carousel.Item key={sneakers.id}>

                            <img
                            className="d-block"
                            width={'100%'}
                            // height={'100%'}
                            src={sneakers['Image']}

                            alt="First slide"
                            />
                            <div className="carouselItem">
                            
                            <div className="textInCarousel">
                            {sneakers['title']}
                            <br/>
                            ₽{sneakers['price']}   
                            </div>
                            <div className="buttonCarouselSection">
                                <Link to={`/store/${sneakers.id}`}>
                                    <button className='buttonCarousel'>Купить</button>
                                </Link>    
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
            <FilterModal Reload={Reload} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter} filter={filter}></FilterModal>
            <div className="cards__container">
                {sneakers.map((sneakers) => {
                    return (
                    <Card countInBracket={inBracket(sneakers.id)} sneaker={sneakers} key={sneakers.id} onAdd={onAdd} onRemove={onRemove} />
                    );
                })}
            </div>
        </>
    );
};

export default Store;