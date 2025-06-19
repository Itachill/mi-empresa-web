import { createContext, useReducer } from 'react';

const CarritoContext = createContext();

const initialState = [];

function carritoReducer(state, action) {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO': {
      const { producto, cantidad } = action.payload;
      const existente = state.find((p) => p.id === producto.id);
      if (existente) {
        return state.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + cantidad }
            : p,
        );
      }
      return [...state, { ...producto, cantidad }];
    }
    case 'ELIMINAR_PRODUCTO':
      return state.filter((p) => p.id !== action.payload);
    case 'VACIAR_CARRITO':
      return [];
    default:
      return state;
  }
}

export function CarritoProvider({ children }) {
  const [carrito, dispatch] = useReducer(carritoReducer, initialState);

  const agregarProducto = (producto, cantidad) => {
    dispatch({ type: 'AGREGAR_PRODUCTO', payload: { producto, cantidad } });
  };

  const eliminarProducto = (id) => {
    dispatch({ type: 'ELIMINAR_PRODUCTO', payload: id });
  };

  const vaciarCarrito = () => {
    dispatch({ type: 'VACIAR_CARRITO' });
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export default CarritoContext;
