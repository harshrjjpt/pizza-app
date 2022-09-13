import Product from "./Product";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";

const data = [
  {
    Title: "Paneer Pizza",
    Size: "medium",
    Price: 500,
    Image: "https://pngimg.com/uploads/pizza/pizza_PNG7111.png",
    Id: 1,
  },

  {
    Title: "Chilli Pizza",
    Size: "medium",
    Price: 500,
    Image: "https://pngimg.com/uploads/pizza/pizza_PNG7111.png",
    Id: 2,
  },
  {
    Title: "Onion Pizza",
    Size: "medium",
    Price: 500,
    Image: "https://pngimg.com/uploads/pizza/pizza_PNG7117.png",
    Id: 3,
  },
  {
    Title: "Chicken Special",
    Size: "medium",
    Price: 500,
    Image: "https://pngimg.com/uploads/pizza/pizza_PNG7110.png",
    Id: 4,
  },
  {
    Title: "Farmhouse",
    Size: "medium",
    Price: 500,
    Image: "https://pngimg.com/uploads/pizza/pizza_PNG7136.png",
    Id: 5,
  },
  {
    Title: "mushroom Special",
    Size: "medium",
    Price: 500,
    Image: "https://pngimg.com/uploads/pizza/pizza_PNG7127.png",
    Id: 6,
  },
  {
    Title: "Cheese Loaded",
    Size: "medium",
    Price: 500,
    Image: "https://pngimg.com/uploads/pizza/pizza_PNG43987.png",
    Id: 7,
  },
  {
    Title: "Pepperoni Pizza",
    Size: "medium",
    Price: 800,
    Image: "https://pngimg.com/uploads/pizza/pizza_PNG7130.png",
    Id: 8,
  },
  {
    Title: "Corn Tikka",
    Size: "medium",
    Price: 600,
    Image: "https://pngimg.com/uploads/pizza/pizza_PNG7112.png",
    Id: 9,
  },
  {
    Title: "Tomato Special",
    Size: "medium",
    Price: 700,
    Image: "https://pngimg.com/uploads/pizza/pizza_PNG7151.png",
    Id: 10,
  },
];

const Productscomponent = () => {
  // const { name } = useContext(CartContext);
  const [products, setProducts] = useState([data]);
  useEffect(() => {
    // fetch("/api/products")
    //   .then((response) => response.json())
    //   .then((products) => {
    //     setProducts(products);
    //   });
    setProducts(data);
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
