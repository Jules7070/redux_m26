import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  if (cartItems.length === 0) return <p>El carrito está vacío.</p>;

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <h3>{item.title}</h3>
              <p>Precio: ${item.price.toFixed(2)}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;


