import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import { addToCart } from "../redux/slices/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Cargando productos...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Productos Disponibles</h2>
      <div className="product-list">
        {items.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Precio: ${product.price.toFixed(2)}</p>
            <button onClick={() => dispatch(addToCart(product))}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;



