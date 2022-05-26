import "./ProductCard.scss";
import { Product } from "../../types";
import { Link } from "react-router-dom";

const ProductCard: React.FC<Product> = ({image, title, price, id}) => {
  return (
    <div className="products-card__single">
      <Link to={`/products/${id}`}>
        <img className={id === 1 ? "products-card__image products-card__image--first" : "products-card__image"} src={image} alt={title}/>
        
      </Link>
      <h4 className="products-card__title">{title.length > 30 ? title.substring(0, 30) : title}...</h4>
      <p className="products-card__price">{price}€</p>
    </div>
  )
}

export default ProductCard;