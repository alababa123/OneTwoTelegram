function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function parse_sizes(sizes) {
  let out = []
  for (let i in sizes) {
    if (sizes[i]) {
      out.push(parseInt(i))
    }
  }
  return out
}

export function getData() {
  let r = httpGet('http://194.58.107.7:8000/api/sneakers/')
  console.log(r)
  let sneakers = []
  for (let i in r) {
    let sneaker_sizes = parse_sizes(r[i]['sneaker_sizes'])
    if (sneaker_sizes.length) {
      sneakers.push({
        id: r[i]['id'],
        title: r[i]['title'],
        price: r[i]['price'],
        Image: r[i]['image1'],
        sizes: sneaker_sizes,
      })
    }
  }
  // return [
  //   { title: "Adidas Yeezy", price: 17999, Image: Yeeze, id:0, sizes:[41,42,43,44]},
  //   { title: "Adidas Yung 1", price: 5350, Image: AdidasYung1, id:1, sizes:[1,2,3,4]},
  //   { title: "Nike Air Force 1", price: 13999, Image: NikeAirForce1, id:2, sizes:[1,2,3,4] },
  //   { title: "Adidas Ozweego", price: 7550, Image: AdidasOzweegoTRGrey, id:3, sizes:[1,2,3,4] },
  //   { title: "Adidas Ozweego PURE", price: 9999, Image: AdidasOzweegoPURE, id:4, sizes:[36,37,38,39,39.5] },
  //   { title: "Adidas Ozelia", price: 6800, Image: AdidasOzelia, id:5, sizes:[36,37,38,39,39.5] },
  //   { title: "Adidas Yeezy 700 V3", price: 6800, Image: AdidasYeezy700V3, id:6, sizes:[36,37,38,39,39.5] }
  // ];
  return sneakers
}