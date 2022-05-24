import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getSingleProduct } from "../../services/api";
import { Product } from "../../types";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
      getSingleProduct(Number(id))
        .then(productItem => setProduct(productItem))   
    },[id])

  console.log(product);

  return (
    <>
      <h1>Product detail</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}€</p>
          <img src={product.image} alt={product.title} />
        </div>
        ) :
        'loading'
        }
    </>
  )
  }

export default ProductDetail