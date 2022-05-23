const API_URL= "https://fakestoreapi.com/products";

export const getProductsFromApi = () => {
  return fetch(API_URL)
          .then(response => response.json())
}

export const getSingleProduct = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
          .then(product => console.log(product))
}