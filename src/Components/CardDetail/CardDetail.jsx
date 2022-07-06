import React, { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./CardDetail.css"
import SizeButton from "./SizeButton"
import { Accordion, Carousel } from "react-bootstrap";


function CardDetail({ food, onAdd, onRemove }) {

  const [currentSize, setcurrentSize] = useState(0)
  const [count, setCount] = useState(0);
  const cur_id = useParams();
  const { title, Image, price, id, sizes } = food[cur_id.id];
  
  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(food[cur_id.id], currentSize);
    };

  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(food[cur_id.id]);
  };

  const setSize = (title) => {
    setcurrentSize(title)
  } 

  return (
    <>
        <Carousel variant="dark" indicators={false} interval={null}>
                        <Carousel.Item>
                        <div className="image__containerDitail">
                            <img
                            className="d-block"
                            width={'100%'}
                            // height={'100%'}
                            src={Image}
                            alt="First slide"
                            />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="image__containerDitail">
                            <img
                            className="d-block"
                            width={'100%'}
                            // height={'100%'}
                            src={Image}
                            alt="First slide"
                            />
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="image__containerDitail">
                            <img
                            className="d-block"
                            width={'100%'}
                            // height={'100%'}
                            src={Image}
                            alt="First slide"
                            />
                        </div>
                        </Carousel.Item>
        </Carousel>
        <div className="cardDetail">
              <div className="cardDetailTitle">
                  {title}
              </div>
              <div className="cardDetailPrice">
                  ₽{price}
              </div>
        </div>
        <div className="cardDescription">
          <p>
            <span className="card__sizes">
              Размеры
            </span>
          </p>
          <div className="sizes-btn-container">
            {sizes.map((size) => { return (<SizeButton key={size.toString()} title={size} Size={setSize} currentSize={currentSize ? currentSize : 0}/>) })}
          </div>
          <div className="btnCart">
            {currentSize !== 0 ?  
            (<button className="btn-add" onClick={handleIncrement}>В корзину</button>) : 
            (<button className="btn-add">Выберите размер</button>)
            }
              {count !== 0 ? (
              <Button title={"-"} type={"remove"} onClick={handleDecrement} />
              ) : (
                ""
              )}
            </div>
          </div>

          <Accordion alwaysOpen style={{marginTop: '1em'}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Описание</Accordion.Header>
            <Accordion.Body>
              Кроссовки 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Детали</Accordion.Header>
            <Accordion.Body>
              12134567екв
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Условия доставки</Accordion.Header>
            <Accordion.Body>
              ствсйвтосэв
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </>
  );
}

export default CardDetail;