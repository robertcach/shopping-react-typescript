import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Product } from "../../types";
import { getProductsFromApi } from "../../services/api";
import { motion } from "framer-motion";
import "./Home.scss";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductsFromApi()
      .then(productsAPI => setProducts(productsAPI))
  }, [])


  return (
    <main>
      <div className="wrapper header">
        <div className="images">
          <motion.div
            className="images__div"
            initial={{ opacity: 0, y: 250, x: 0 }}
            animate={{ opacity: 1, y: 100, x: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1
            }}
          >
            <img src="https://picsum.photos/id/237/300/300" alt="imagen-prueba" />
          </motion.div>

          <motion.div
            className="images__div"
            initial={{ opacity: 0, y: 250, x: 800 }}
            animate={{ opacity: 1, y: 100, x: 800 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.5
            }}
          >
            <img src="https://picsum.photos/300/300" alt="imagen-prueba" />
          </motion.div>


          <motion.div
            className="images__div"
            initial={{ opacity: 0, y: 250, x: 200 }}
            animate={{ opacity: 1, y: -150, x: 200 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1
            }}
          >
            <img src="https://picsum.photos/700/450" alt="imagen-prueba" />
          </motion.div>





        </div>
        
      </div>

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