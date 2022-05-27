import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getSingleProduct } from "../../services/api";
import { Product } from "../../types";
import { useCartContext } from "../../contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { cartItems } = useCartContext();

  useEffect(() => {
    getSingleProduct(Number(id))
      .then(productItem => setProduct(productItem))   
  },[id])

  console.log(product);

  const addToCart = () => {
    if (!cartItems.includes(product)) {
      console.log(product)
    }
  };

  return (
    <div className="product-detail wrapper">
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}€</p>
          <img src={product.image} alt={product.title} />
          <button onClick={addToCart}>Add to cart</button>
        </div>
        ) :
        'loading'
        }
    </div>
  )
}

export default ProductDetail