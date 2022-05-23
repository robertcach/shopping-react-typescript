import "./ProductCard.scss";
import { Product } from "../../types";
import { getSingleProduct } from "../../services/api";

const ProductCard: React.FC<Product> = ({image, title, price, id}) => {
  return (
    <div className="product-card__info">
      <img className="product-card__image" src={image} alt={title}/>
      <h3 className="product-card__title">{title}</h3>
      <p className="product-card__price">{price}</p>
      <button onClick={() => getSingleProduct(id)}>Add to cart</button>
    </div>
  )
}

export default ProductCard;