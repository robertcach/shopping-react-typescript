import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Product } from "../../types";
import { getProductsFromApi } from "../../services/api";
import { motion, useViewportScroll } from "framer-motion";
import "./Home.scss";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { scrollYProgress } = useViewportScroll()

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
            initial={{ opacity: 0, y: 200, x: 0 }}
            animate={{ opacity: 1, y: 75, x: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1
            }}
          >
            <img src="https://picsum.photos/id/237/275/400" alt="imagen-prueba" />
          </motion.div>

          <motion.div
            className="images__div"
            initial={{ opacity: 0, y: 250, x: 825 }}
            animate={{ opacity: 1, y: -300, x: 825 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.5
            }}
          >
            <img src="https://picsum.photos/275/400" alt="imagen-prueba" />
          </motion.div>


          <motion.div
            className="images__div"
            initial={{ opacity: 0, y: 250, x: 100 }}
            animate={{ opacity: 1, y: -450, x: 100 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1
            }}
          >
            <img src="https://picsum.photos/900/600" alt="imagen-prueba" />
          </motion.div>


          <motion.div
            className="images__div"
            initial={{ opacity: 0, y: 150, x: 700 }}
            animate={{ opacity: 1, y: -500, x: 700 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.5
            }}
          >
            <img src="https://picsum.photos/350/250" alt="imagen-prueba" />
          </motion.div>

          <motion.div
            className="images__div"
            initial={{ opacity: 0, y: 150, x: 15 }}
            animate={{ opacity: 1, y: -775, x: 15 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.5
            }}
          >
            <img src="https://picsum.photos/350/250" alt="imagen-prueba" />
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
