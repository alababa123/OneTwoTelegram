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
  
export function getFilter() {
    
    let urlBrands = "https://onetwosneaker.ru/api/filters/brands";
  
    let urlColors = "https://onetwosneaker.ru/api/filters/colors";
  
    let urlSizes = "https://onetwosneaker.ru/api/filters/sizes";
  
    let filterBrands = Api(urlBrands, "GET", "");
  
    let filterColor = Api(urlColors, "GET", "");
  
    let filterSizes = Api(urlSizes, "GET", "");
    
    return {
        'brands' : filterBrands,
        'colors' : filterColor,
        'sizes' : filterSizes
    }
  }