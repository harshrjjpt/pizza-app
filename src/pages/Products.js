import Product from "../components/Product";
import "./products.css";
import React from "react";
import Productscomponent from "../components/Productscomponent";

function Products(props) {
  return (
    <div className="products">
      <Productscomponent />
    </div>
  );
}

export default Products;
