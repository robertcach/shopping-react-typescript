import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
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
    <main>
      <h1>Home</h1>

      <div className="product-card wrapper">
        {products.length > 0 ? products.map(product => (
            <ProductCard 
              category={product.category}
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              key={product.id}
            />
          )) : 
          <span>loading...</span>
        }
      </div>
    </main>
  )
}

export default Home;