  import Yeeze from "../images/AdidasYeezy.png"
import AirForceNikeLowUv from "../images/AirForceNike1LowUV.png"
import AdidasYung1 from "../images/AdidasYung1.png"
import NikeAirForce1 from "../images/NikeAirForce1.png"
import AdidasOzweegoTRGrey from "../images/AdidasOzweego.png"
import AdidasOzweegoPURE from "../images/AdidasOzweegoPURE.png"
import AirJordan1ElevateLow from "../images/AirJordan1.png"

export function getData() {
  return [
    { title: "Adidas Yeezy", price: 17999, Image: Yeeze, id:0, sizes:[1,2,3,4]},
    { title: "Adidas Yung 1", price: 5350, Image: AdidasYung1, id:1, sizes:[1,2,3,4]},
    { title: "Nike Air Force 1", price: 13999, Image: NikeAirForce1, id:2, sizes:[1,2,3,4] },
    { title: "Adidas Ozweego", price: 7550, Image: AdidasOzweegoTRGrey, id:3, sizes:[1,2,3,4] },
    { title: "Adidas Ozweego PURE", price: 9999, Image: AdidasOzweegoPURE, id:4, sizes:[1,2,3,4] },
  ];
}
