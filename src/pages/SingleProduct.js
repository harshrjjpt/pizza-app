import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../index.css";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);

  return (
    <div>
      <div>
        <button
          className="back"
          onClick={() => navigate(-1)
          }
        >
          back
        </button>
      </div>
      <div className="single">
        <div className="singleleft">
          <img src={product.image} alt="pizza picture" />
        </div>
        <div className="singleright">
          <div className="singletitle">{product.name}</div>
          <div className="singlesize">{product.size}</div>
          <div className="singleprice">₹{product.price}</div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
