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
{/*         <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}>
          <span className='row-message'>
            We are specialised in setting up the foundation of your brand and
            setting you up for success.
          </span>
        </motion.div>
 */}
        <motion.div
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 100 }}
          transition={{
            ease: "easeInOut",
            duration: 1
          }}
        >
          <img src="https://picsum.photos/200/300" alt="imagen-prueba" />
        </motion.div>
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