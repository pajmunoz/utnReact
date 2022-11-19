export function getAllChar(val) {
  return fetch(`https://swapi.dev/api/people/?search=${val}`).then((res) => res.json());
}

export function getChar(e) {
  return fetch(`https://akabab.github.io/starwars-api/api/id/${e}.json`).then((res) => res.json());
  
}

export function getCharId() {
  return fetch(`https://akabab.github.io/starwars-api/api/all.json`).then((res) => res.json());
  
}

export function getAllSpecie(e) {
  return fetch(e).then((res) =>
    res.json()
  );
}
export function getAllHome(e) {
  return fetch(e).then((res) =>
    res.json()
  );
}

export function getMeli(val) {
  return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${val}`).then((res) => res.json());
  
}
export function getByIdProductos(id){
  return fetch(`https://api.mercadolibre.com/items/${id}`).then((res) => res.json());
}
export function getByIdDetail(id){
  return fetch(`https://api.mercadolibre.com/items/${id}/description`).then((res) => res.json());
}