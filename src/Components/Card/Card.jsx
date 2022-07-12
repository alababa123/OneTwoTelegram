import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ countInBracket, sneaker, onAdd, onRemove }) {

  return (
    <Link to={`/store/${sneaker.id}`} style={{ textDecoration: 'none' }}>  
      <div className="cardItem">
          <div className="image__container">
            <img src={sneaker.Image} alt={sneaker.title}>
            </img>
          </div>

          <h4 className="card__title">
            {sneaker.title}
            <br/>
            <div className="card__price">
            &nbsp;₽ {sneaker.price}&nbsp;
          </div>
          </h4>
      </div> 
      </Link> 
  );
}

export default Card;
