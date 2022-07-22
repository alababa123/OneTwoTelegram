function Api(theUrl, method, body) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open(method, theUrl, false); 
  if (body === ""){
    xmlHttp.send(null);
  } 
  else{
    xmlHttp.send(JSON.stringify(body));
  }
  console.log(JSON.parse(xmlHttp.responseText))
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

export function getData(filter) {
  
  let url = "https://onetwosneaker.ru/api/sneakers/filter";
  
  let sneaker = Api(url, "POST", filter)


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
        composition: sneaker[i]['composition'],
        color: sneaker[i]['color'],
        producing_country: sneaker[i]['producing_country'],
      })
    }
  }
  return sneakers
}