import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getSingleProduct } from "../../services/api";
import { Product } from "../../types";
import { useCartContext } from "../../contexts/CartContext";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({} as Product);
  const { cartItems, addCart } = useCartContext();

  useEffect(() => {
    getSingleProduct(Number(id))
      .then(productItem => setProduct(productItem))   
  },[id])

  const addToCart = () => {
    if (!cartItems.includes(product)) {
      addCart(product);
    }
  };


  return (
    <div className="product-detail wrapper">
      {product ? (
        <div className="product-detail__card">
          <div className="product-detail__picture">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-detail__info">
            <h2 className="product-detail__title">{product.title}</h2>
            <p className="product-detail__price">{product.price}€</p>
            <p className="product-detail__description">{product.description}</p>
            <button className="product-detail__btn" onClick={addToCart}>Add to cart</button>
            <p className="product-detail__categories">Categories: {product.category}</p>
          </div>
        </div>
        ) :
        'loading'
        }

        <section className="product-extra">
          <div>
            <div className="product-extra__info">
              <h4 className="product-extra__title">Description</h4>
              <p className="product-extra__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text.</p>
            </div>

            <div className="product-extra__info">
              <h4 className="product-extra__title">Shipping</h4>
              <p className="product-extra__text">We offer worldwide shipping.</p>
            </div>

            <div className="product-extra__info">
              <h4 className="product-extra__title">Sizing</h4>
              <p className="product-extra__text">Fits true to size. If you’re looking for a half size, we recommend to take one size up. Size advice</p>
            </div>

            <div className="product-extra__info">
              <h4 className="product-extra__title">Return & exchange</h4>
              <p className="product-extra__text">If you are not satisfied with your purchase you can return it to us within 14 days for an exchange or refund. More info</p>
            </div>  
        </div>
          
            <img src="https://picsum.photos/id/119/600/600" alt="extra product image" />
        

        </section>
    </div>
  )
}

export default ProductDetail