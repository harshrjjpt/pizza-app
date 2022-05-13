import React from "react";
import Product from "./Product";
import { data } from "../data";

class Productscomponent extends React.Component {
    componentDidMount () {
        const {store} = this.props;
        store.subscribe(() => {
            console.log('updated');
            this.forceUpdate();
        });
        store.dispatch({
            type: 'ADD_PIZZAS',
            pizzas: data
        })
        
    console.log('mera-store', this.props.store.getState());
    }
    
    render () {
        const pizzas = this.props.store.getState();
        return (
    
            <div className="productscomponent">
              {pizzas.map((pizza, index) => (
                <Product pizza={pizza} key={`pizzas-${index}`} />
              ))}
            </div>
           
          )
              

    }
  
      
}

export default Productscomponent;