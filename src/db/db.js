import Yeeze from "../images/AdidasYeezy.png"
import AirForceNikeLowUv from "../images/AirForceNike1LowUV.png"
import AdidasYung1 from "../images/AdidasYung1.png"
import NikeAirForce1 from "../images/NikeAirForce1.png"
import AdidasOzweegoTRGrey from "../images/AdidasOzweego.png"
import AdidasOzweegoPURE from "../images/AdidasOzweegoPURE.png"
import AirJordan1ElevateLow from "../images/AirJordan1.png"

export function getData() {
  return [
    { title: "Кроссовки Adidas Yeezy", price: 17999, Image: Yeeze, id:1 },
    { title: "Кроссовки Air Force Nike 1 Low UV", price: 15000, Image: AirForceNikeLowUv,id:2 },
    { title: "Кроссовки Adidas Yung 1", price: 5350, Image: AdidasYung1, id:3},
    { title: "Кроссовки Nike Air Force 1", price: 13999, Image: NikeAirForce1, id:4 },
    { title: "Кроссовки Adidas Ozweego", price: 7550, Image: AdidasOzweegoTRGrey, id:5 },
    { title: "Кроссовки Adidas Ozweego PURE", price: 9999, Image: AdidasOzweegoPURE, id:6 },
    { title: "Кроссовки Air Jordan 1 Elevate Low", price: 21399, Image: AirJordan1ElevateLow, id:7 },
  ];
}
