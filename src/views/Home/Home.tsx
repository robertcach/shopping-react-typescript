import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Product } from "../../types";
import { getProductsFromApi } from "../../services/api";
import "./Home.scss";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductsFromApi()
      .then(productsAPI => setProducts(productsAPI))
  }, [])


  return (
    <main>
      <h1>Home</h1>

      <div className="product-card wrapper">
        {products.length > 0 ? products.map(product => (
            <ProductCard 
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