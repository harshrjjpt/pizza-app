import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import "./cart.css";

const Cart = () => {
  let total = 0;
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  const [priceFetched, togglePriceFetched] = useState(false);

  useEffect(() => {
    if (!cart.items) {
      return;
    }

    if (priceFetched) {
      return;
    }

    console.log("haha", Object.keys(cart.items));
    fetch("/api/products/cart-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        console.log("myproducts", products);
        togglePriceFetched(true);
      });
  }, [cart]);

  const getQuantity = (productId) => {
    return cart.items[productId];
  };

  const increaseQuantity = (productId) => {
    const previous = cart.items[productId];
    const _cart = { ...cart };
    _cart.items[productId] = previous + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  };

  const decreaseQuantity = (productId) => {
    const previous = cart.items[productId];
    if (previous === 1) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[productId] = previous - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  };

  const getSum = (productId, price) => {
    const sum = cart.items[productId] * price;
    total += sum;
    return sum;
  };

  const deleteItem = (productId) => {
    const _cart = { ...cart };
    const quantity = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= quantity;
    setCart(_cart);

    const newProductsList = products.filter(
      (product) => product._id !== productId
    );

    setProducts(newProductsList);
  };

  return products.length ? (
    <div className="cart-component">
      <b className="cart-head">Cart items</b>
      <ul>
        {products.map((product) => {
          return (
            <li className="cart-li" key={product._id}>
              <div className="cart">
                <div className="cart-left">
                  <img
                    src={product.image}
                    alt="product-image"
                    className="cartpic"
                  />
                  <span className="carttitle">
                    {" "}
                    <b>{product.name}</b>
                  </span>
                </div>

                <div className="cart-middle">
                  <button
                    onClick={() => {
                      decreaseQuantity(product._id);
                    }}
                    className="cartinc"
                  >
                    -
                  </button>
                  <b>{getQuantity(product._id)}</b>
                  <button
                    onClick={() => {
                      increaseQuantity(product._id);
                    }}
                    className="cartdec"
                  >
                    +
                  </button>
                </div>
                <div className="cart-right">
                  <span>
                    <b className="totalpaise">₹ {getSum(product._id, product.price)}</b>
                  </span>
                  <button
                    onClick={() => {
                      deleteItem(product._id);
                    }}
                    className="cartdelete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="cart-total">
        <b className="grand">Grand Total : </b>
        <b> {total}</b>
      </div>
      <br></br>
      <div className="order-btn-div">
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  ) : (
    <div className="empty-cart-container">
      <img
        className="empty-cart"
        alt="empty-cart"
        src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg?t=st=1653411567~exp=1653412167~hmac=b0a9361d125858dddfdb8152032a7a1c2044501c6cf602a2d42e96cfdf05466d&w=740"
      />
    </div>
  );
};

export default Cart;
