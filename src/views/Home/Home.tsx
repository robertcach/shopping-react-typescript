import { useEffect, useState } from "react";
import { Product } from "../../types";
import "./Home.scss";

const API_URL= "https://fakestoreapi.com/products";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(productsAPI => setProducts(productsAPI))
  }, [])


  return (
    <>
      <h1>Home</h1>
      {products.length > 0 ? products.map(product => (
          <div key={product.id}>
            <p>{product.title}</p>
          </div>
        )) : 
        <span>loading...</span>
      }
    </>
  )
}

export default Home