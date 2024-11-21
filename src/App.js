import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css"; // Importa los estilos globales

const App = () => {
  return (
    <div>
      <h1>Ecommerce con Redux Toolkit</h1>
      <div className="container">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
};

export default App;



