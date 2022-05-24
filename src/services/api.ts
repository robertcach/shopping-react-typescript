export const getProductsFromApi = () => {
  return fetch("https://fakestoreapi.com/products")
          .then(response => response.json())
}

export const getSingleProduct = (id: number) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
}