import "./ProductCard.scss";
import { Product } from "../../types";

const ProductCard = (props: Product) => {
  return (
    <div className="product-card__info">
      <img className="product-card__image" src={props.image} alt={props.title}/>
      <h3 className="product-card__title">{props.title}</h3>
      <p className="product-card__price">{props.price}</p>
      <button>Add to cart</button>
    </div>
  )
}

export default ProductCard;