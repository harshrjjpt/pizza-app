import Product from "./Product";
import { data } from "../data";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";

const Productscomponent = () => {
  // const { name } = useContext(CartContext);
  const [products, setProducts] = useState([data]);
  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return (
    <div className="productscomponent">
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Productscomponent;
