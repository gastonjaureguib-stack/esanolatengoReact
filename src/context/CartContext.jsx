// Importamos las herramientas necesarias de React
import { createContext, useState, useEffect } from "react";


// Creamos el Contexto.
export const CartContext = createContext();


// Creamos el Provider.
export const CartProvider = ({ children }) => {

  // ====================================================
  // CARGAR CARRITO DESDE LOCALSTORAGE
  // ====================================================
  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });


  // ====================================================
  // GUARDAR CARRITO EN LOCALSTORAGE
  // ====================================================
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);


  // ====================================================
  // AGREGAR PRODUCTO AL CARRITO
  // ====================================================
  const addItem = (item, quantity) => {

    const itemInCart = cart.find(
      (prod) => prod.id === item.id
    );

    if (itemInCart) {

      const updatedCart = cart.map((prod) => {

        if (prod.id === item.id) {
          return {
            ...prod,
            quantity: prod.quantity + quantity
          };
        }

        return prod;
      });

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...item,
          quantity
        }
      ]);
    }
  };


  // ====================================================
  // SUMAR 1 UNIDAD
  // ====================================================
 const increaseQuantity = (id) => {

  const updatedCart = cart.map((prod) => {

    if (prod.id === id) {

      // No permite superar el stock disponible
      if (prod.quantity >= prod.stock) {
        return prod;
      }

      return {
        ...prod,
        quantity: prod.quantity + 1
      };
    }

    return prod;
  });

  setCart(updatedCart);
};


  // ====================================================
  // RESTAR 1 UNIDAD
  // ====================================================
  const decreaseQuantity = (id) => {

    const item = cart.find(
      (prod) => prod.id === id
    );

    if (!item) return;

    if (item.quantity === 1) {

      removeItem(id);

    } else {

      const updatedCart = cart.map((prod) => {

        if (prod.id === id) {
          return {
            ...prod,
            quantity: prod.quantity - 1
          };
        }

        return prod;
      });

      setCart(updatedCart);
    }
  };


  // ====================================================
  // ELIMINAR PRODUCTO
  // ====================================================
  const removeItem = (id) => {

    const updatedCart = cart.filter(
      (prod) => prod.id !== id
    );

    setCart(updatedCart);
  };


  // ====================================================
  // VACIAR CARRITO
  // ====================================================
  const clearCart = () => {

    setCart([]);
  };


  // ====================================================
  // TOTAL DE UNIDADES
  // ====================================================
  const getTotalQuantity = () => {

    return cart.reduce(
      (acc, prod) => acc + prod.quantity,
      0
    );
  };


  // ====================================================
  // TOTAL DE DINERO
  // ====================================================
  const getTotalPrice = () => {

    return cart.reduce(
      (acc, prod) =>
        acc + (prod.price * prod.quantity),
      0
    );
  };


  // ====================================================
  // PROVIDER
  // ====================================================
  return (

    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalQuantity,
        getTotalPrice
      }}
    >

      {children}

    </CartContext.Provider>

  );
};