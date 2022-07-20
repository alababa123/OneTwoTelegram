function Api(theUrl, method, body) {
  console.log(theUrl, body, method)
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open(method, theUrl, false); // false for synchronous request
  
  if (body === ""){
    console.log(1)
    xmlHttp.send(null);
  } 
  else{
    console.log(2)
    xmlHttp.send(JSON.stringify(body));
  }
  return JSON.parse(xmlHttp.responseText);
}

function parse_sizes(sizes) {
  let out = []
  for (let i in sizes) {
    if (sizes[i]) {
      out.push(parseInt(i.slice(5))/10)
    }
  }
  return out
}

export function getData(min_price, max_price, gender, brand, color, size) {
  
  let url = "https://onetwosneaker.ru/api/sneakers/filter";
  
  let sneaker = Api(url, "POST", {})


  let sneakers = []
  for (let i in sneaker) {
    let sneaker_sizes = parse_sizes(sneaker[i]['sizes'])
    if (sneaker_sizes.length) {
      let sneaker_images = []
      for (let j = 1; j < 7; j++) {
        if (sneaker[i][`image${j}`]) {
          sneaker_images.push(sneaker[i][`image${j}`])
        }
      }
      sneakers.push({
        id: sneaker[i]['id'],
        title: sneaker[i]['title'],
        price: sneaker[i]['price'],
        Image: sneaker[i]['image1'],
        gender: sneaker[i]['gender'],
        Images: sneaker_images,
        brand: sneaker[i]['brand'],
        description: sneaker[i]['description'],
        sizes: sneaker_sizes,
      })
    }
  }
  return sneakers
}