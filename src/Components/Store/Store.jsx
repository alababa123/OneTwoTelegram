import React from "react";
import "../Store/Store.css";
import Card from "../Card/Card";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Store.css"
import { useState } from "react";
import FilterModal from "../Modal/FilterModal"
// const { getData } = require("../../db/db");

function Store({ getData, onAdd, onRemove, cartItems, onAddFilter, onRemoveFilter, filter, showCarousel, setShowCarousel, onClearFilter }) {


    const filters = {
        'brand': [],
        'min_price': 0,
        'max_price': 100000000000,
        'sizes': [],
        'gender': '',
        'color': [],
        'sort': '',
    }



    let sneakers = getData(filter);

    const [reloadState, setReloadState] = useState(0)

    const Reload = () => {
        for (let i in filter){
            if (JSON.stringify(filter[i]) != JSON.stringify(filters[i])){
                console.log(i, filter[i])
                setShowCarousel(false);
                break;
            }
            setShowCarousel(true);
        }
        
        if (reloadState == 1) {
            setReloadState(0);
        }
        else{
            setReloadState(1);
        }
    }

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
        {showCarousel == true ? (
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
            </>
            ): (
            <>
            </>)}
            <FilterModal showCarousel={showCarousel} Reload={Reload} onAddFilter={onAddFilter} onRemoveFilter={onRemoveFilter} filter={filter}></FilterModal>
            {showCarousel == false ? (
                <button className="clearFilterButton" onClick={onClearFilter}>Сбросить фильтры</button>

            ) : ("")}
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