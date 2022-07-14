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
      out.push(parseInt(i.slice(5))/10)
    }
  }
  return out
}

export function getData() {
  let r = httpGet('https://onetwosneaker.ru/api/sneakers/')
  let sneakers = []
  for (let i in r) {
    let sneaker_sizes = parse_sizes(r[i]['sizes'])
    if (sneaker_sizes.length) {
      let sneaker_images = []
      for (let j = 1; j < 7; j++) {
        if (r[i][`image${j}`]) {
          sneaker_images.push(r[i][`image${j}`])
        }
      }
      sneakers.push({
        id: r[i]['id'],
        title: r[i]['title'],
        price: r[i]['price'],
        Image: r[i]['image1'],
        gender: r[i]['gender'],
        Images: sneaker_images,
        brand: r[i]['brand'],
        description: r[i]['description'],
        sizes: sneaker_sizes,
      })
    }
  }
  return sneakers
}