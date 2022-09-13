import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useState } from "react";
import "./product.css";

const Product = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const { product } = props;

  const imgClick = (event) => {
    event.preventDefault();
  }

  const addToCart = (event, product) => {
    event.preventDefault();
    console.log(product);

    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }

    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
    }, 800);
  };

  return (
    <Link to={`/products/${product._id}`}>
      <div className="card">
        <div className="head">
          <img  onClick={(e) => {
                imgClick(e);
              }} className="pizza-pic" alt="pizza-image" src={product.Image} />
          <h3>{product.Title}</h3>

          <span>{product.Size}</span>
        </div>
        <div className="footer">
          <div>
            <span style={{ fontWeight: "700" }}>₹ {product.Price}</span>
          </div>
          <div>
            <button
              disabled={isAdding}
              className={`${isAdding ? "active-btn" : "inactive-btn"}`}
              onClick={(e) => {
                addToCart(e, product);
              }}
            >
              ADD{isAdding ? "ED" : ""}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
