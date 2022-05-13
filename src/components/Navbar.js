
import { Link } from "react-router-dom"
const Navbar = () => {
    const text = {
        textDecoration : 'none',
        color: 'black',
        fontWeight: 600,
        padding: '0px 15px'
    }


  return (
    <div className="nav">
        <div className="left">
        <Link to="/">
            <img className="logo-pic" alt="logo" src="https://img.icons8.com/arcade/344/experimental-pizza-arcade.png" />
        </Link>
        </div>

        <div className="right">
            <ul>
                <li> <Link style= { text }  to="/">Home</Link></li>
                <li><Link style= { text}  to="/products">Products</Link></li>
                <li><Link style= { text}  to="/cart">
                    <div className="cart-box">
                        
                        <img className="cart-logo" alt="cart-pic" src="https://img.icons8.com/material-rounded/344/ffffff/shopping-cart-loaded.png"  />
                        <span>3</span>
                    </div>
                    </Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar