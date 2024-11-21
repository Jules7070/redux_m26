import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialProducts = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

const initialCart = [];

// Reducer para manejar productos
export const productReducer = (state = initialProducts, action) => {
  switch (action.type) {
    default:
      return state; // Devuelve el estado inicial (lista de productos)
  }
};

// Reducer para manejar el carrito
export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.find((product) => product.id === action.payload.id)) {
        return state; // No agrega duplicados
      }
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};



