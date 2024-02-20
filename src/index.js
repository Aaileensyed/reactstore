import React from 'react';
import ReactDOM from 'react-dom';
import { DishProvider } from "./context/dishes";
import App from './App';
import './index.css';
import { CartProvider } from './context/cart';

ReactDOM.render(
  <DishProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </DishProvider>,
  document.getElementById('root')
);
