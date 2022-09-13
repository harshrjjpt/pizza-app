import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import "./navbar.css";

const Navbar = () => {
  const text = {
    textDecoration: "none",
    color: "black",
    fontWeight: 600,
    padding: "0px 15px",
  };

  const { cart } = useContext(CartContext);
  return (
    <div className="nav">
      <div className="left">
        <Link to="/">
          <img
            className="logo-pic"
            alt="logo"
            src="https://img.icons8.com/arcade/344/experimental-pizza-arcade.png"
          />
        </Link>
        <span className="logoname">Eatzaa</span>
      </div>

      <div className="right">
        <ul>
          <li>
            {" "}
            <Link style={text} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={text} to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link style={text} to="/cart">
              <div className="cart-box">
                <img
                  className="cart-logo"
                  alt="cart-pic"
                  src="https://img.icons8.com/material-rounded/344/ffffff/shopping-cart-loaded.png"
                />
                <span>{cart.totalItems ? cart.totalItems : 0}</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
