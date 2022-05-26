import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Product } from "../../types";
import { getProductsFromApi } from "../../services/api";
import { AnimatePresence, motion } from "framer-motion";
import "./Home.scss";



const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductsFromApi()
      .then(productsAPI => setProducts(productsAPI))
  }, [])


  return (
    <main>
      <section className="header wrapper">
        <div className="header__left">
          <h1 className="header__title">New trendy Fashion</h1>
          <button className="header__btn">Go to shop</button>
        </div>

        <motion.div
          className="header__center"
          initial={{ opacity: 0, y: 200, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 50 }}
          transition={{
            ease: "easeOut",
            duration: 1
          }}
        >
          <img src="https://picsum.photos/id/157/600/750" alt="imagen-superior-izquierda" />
        </motion.div>

        <div className="header__right">
          <p className="header__subtitle">I must explains to you how all this idea of denouncing pleasure</p>
        </div>  

      </section>
        
      <section className="products wrapper">
        <h2 className="products__title">Products</h2>
        <div className="products-card">
          {products.length > 0 && products.map(product => (
              <ProductCard 
                id={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                key={product.id}
              />
            ))
          }
        </div>
      </section>

      <section className="categories">
        <div className="wrapper">
          <h2>Categories</h2>
        </div>
      </section>

      
    </main>
  )
}

export default Home;
