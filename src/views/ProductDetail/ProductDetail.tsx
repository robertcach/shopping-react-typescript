import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getSingleProduct } from "../../services/api";
import { Product } from "../../types";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
      getSingleProduct(Number(id))
        .then(productItem => setProduct(productItem))   
    },[id])

  console.log(product);

  return (
    <>
      <h1>Product detail</h1>
      {product && product.title}
    </>
  )
  }

export default ProductDetail