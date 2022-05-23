import { useEffect, useState } from "react"

const API_URL= "https://fakestoreapi.com/products"

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(productsAPI => setProducts(productsAPI))
  }, [])

  console.log(products)


  return (
    <>
      <h1>Home</h1>
      {products ? products.map(product => {
        return (
          <>
            <p>{product.title}</p>
          </>
        )
      }) :
        <p>loading...</p>
      }
    </>
  )
}

export default Home