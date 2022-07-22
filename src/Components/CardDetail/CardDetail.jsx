import React, { useState } from "react";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";
import "./CardDetail.css"
import SizeButton from "./SizeButton"
import { Accordion, Carousel } from "react-bootstrap";
import cogoToast from 'cogo-toast';


function CardDetail({ sneaker, onAdd, onRemove }) {

  const [currentSize, setcurrentSize] = useState(0)
  const [count, setCount] = useState(0);
  const cur_id = useParams();

  let cur_sneaker
  for (let i in sneaker){
    if (sneaker[i].id == cur_id.id){
      cur_sneaker = sneaker[i]
    }
  }

  const { id, title, Image, Images, price, sizes, description, composition,color, gender, producing_country } = cur_sneaker;
  
  const handleIncrement = () => {
    setCount(count + 1);
    onAdd(cur_sneaker, currentSize);
    cogoToast.success('Товар добавлен в корзину!');
    };

  const handleDecrement = () => {
    setCount(count - 1);
    onRemove(cur_sneaker, currentSize);
  };

  const setSize = (title) => {
    setcurrentSize(title)
  } 

  return (
    <>
        <Carousel variant="dark" indicators={false} interval={null}>
          {Images.map((img) => {
                      return (
                        <Carousel.Item key={img}>
                        <div className="image__containerDitail">
                            <img
                            className="d-block"
                            width={'100%'}
                            // height={'100%'}
                            src={img}
                            alt="First slide"
                            />
                        </div>
                        </Carousel.Item>
                      );
                      }
                      )
                    }
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
            </div>
          </div>

          <Accordion alwaysOpen style={{marginTop: '1em'}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Описание</Accordion.Header>
            <Accordion.Body>
            Кроссовки: {gender == 'M' ? 
                      'Мужские' 
                      : 
                      gender == 'U' ? ('Унисекс') :('Женские')} <br/>
              {description}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Детали</Accordion.Header>
            <Accordion.Body>
              Цвет: {color}<br/>
              Материалы: {composition}<br/>
              Страна производитель: {producing_country}
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey="2">
            <Accordion.Header>Условия доставки</Accordion.Header>
            <Accordion.Body>
              ствсйвтосэв
            </Accordion.Body>
          </Accordion.Item> */}
        </Accordion>
    </>
  );
}

export default CardDetail;