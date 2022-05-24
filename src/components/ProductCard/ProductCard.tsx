import "./ProductCard.scss";
import { Product } from "../../types";
import { getSingleProduct } from "../../services/api";
import { Link } from "react-router-dom";

const ProductCard: React.FC<Product> = ({image, title, price, id}) => {
  return (
    <div className="product-card__info">
      <img className="product-card__image" src={image} alt={title}/>
      <h3 className="product-card__title">{title}</h3>
      <p className="product-card__price">{price}</p>
      <Link to={`/products/${id}`}>View product</Link>
    </div>
  )
}

export default ProductCard;