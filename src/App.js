import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import './index.css';
function App() {
  return (
    <div>
      <Router>
      <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes >
      </Router>
   
    </div>
  );
}

export default App;
