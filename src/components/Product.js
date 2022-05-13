import React from "react";

class Product extends React.Component {
  render () {
      
    const {pizza} = this.props;
    return (
    <div className='card'>
        <div className='head'>
            <img className="pizza-pic" alt="pizza-image" src={pizza.Image} />
            <h3>{pizza.Title}</h3>
            <span>{pizza.Size}</span>
        </div>
        <div className='footer'>
            <div>
                <span>{pizza.Price}</span>
            </div>
            <div>
                <button>ADD</button>
            </div>
        </div>

    </div>
    )
  }
}

export default Product;