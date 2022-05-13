import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import Productscomponent from './components/Productscomponent';
import reportWebVitals from './reportWebVitals';
import pizzas from './reducers';


const store = createStore(pizzas);

console.log('store', store);
// console.log('store', store.getState());

// store.dispatch({
//   type: 'ADD_PIZZAS',
//   pizzas: [{name: 'Paneeeer'}]
// });


// console.log('storeafter', store.getState());

 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
    <Productscomponent store={store}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
