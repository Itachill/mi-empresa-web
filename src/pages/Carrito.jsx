import { useContext } from 'react';
import CarritoContext from '../context/CarritoContext.jsx';
import './Carrito.css';

function Carrito() {
  const { carrito, eliminarProducto, vaciarCarrito } = useContext(CarritoContext);

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div className="carrito-container">
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="lista-productos">
          {carrito.map((producto) => (
            <div key={producto.id} className="producto">
              <p><strong>{producto.nombre}</strong></p>
              <p>Precio: ${producto.precio}</p>
              <p>Cantidad: {producto.cantidad}</p>
              <p>Subtotal: ${producto.precio * producto.cantidad}</p>
              <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            </div>
          ))}
          <div className="total-carrito">Total: ${total}</div>
          <div className="acciones">
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
            <button>Ir a pagar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;
