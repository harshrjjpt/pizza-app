import Product from "../components/Product";
import { useState } from "react";
import { data } from "../data";
import React from "react";

class Products extends React.Component {
  render () {

  return (
    
    <div className="products">
      {data.map(pizza => (
        <Product pizza={pizza} />
      ))}


    
        
            </div>
   
  )
      }
}

export default Products;