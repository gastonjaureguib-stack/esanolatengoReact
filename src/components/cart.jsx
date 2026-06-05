import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

import CartItem from "./CartItem";

const Cart = () => {

  const {
    cart,
    removeItem,
    clearCart,
    getTotalPrice,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext);

  // ====================================
  // ELIMINAR PRODUCTO
  // ====================================
  const handleRemoveItem = (id) => {

    Swal.fire({
      title: "¿Eliminar producto?",
      text: "Se quitará del carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {

      if (result.isConfirmed) {

        removeItem(id);

        Swal.fire({
          title: "Producto eliminado",
          icon: "success",
          timer: 1200,
          showConfirmButton: false
        });

      }

    });

  };

  // ====================================
  // VACIAR CARRITO
  // ====================================
  const handleClearCart = () => {

    Swal.fire({
      title: "¿Vaciar carrito?",
      text: "Se eliminarán todos los productos",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar"
    }).then((result) => {

      if (result.isConfirmed) {

        clearCart();

        Swal.fire({
          title: "Carrito vaciado",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        });

      }

    });

  };

  if (cart.length === 0) {
    return (
      <div style={{ padding: "40px", color: "white" }}>
        <h2>Tu carrito está vacío</h2>

        <Link
          to="/tienda"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            background: "#c19a6b",
            color: "#004444",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          Ir a la tienda
        </Link>

      </div>
    );
  }

  return (
    <div style={{ padding: "40px", color: "white" }}>

      <h2 style={{ marginBottom: "30px" }}>
        Carrito
      </h2>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          handleRemoveItem={handleRemoveItem}
        />
      ))}

      <hr />

      <h3>
        Total: ${getTotalPrice()}
      </h3>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px"
        }}
      >

        <Link
          to="/checkout"
          style={{
            background: "green",
            color: "white",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          Finalizar compra
        </Link>

        <Link
          to="/tienda"
          style={{
            background: "#c19a6b",
            color: "#004444",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          Seguir comprando
        </Link>

        <button
          onClick={handleClearCart}
          style={{
            background: "black",
            color: "white",
            padding: "10px 15px",
            border: "none",
            cursor: "pointer",
            borderRadius: "8px"
          }}
        >
          Vaciar carrito
        </button>

      </div>

    </div>
  );
};

export default Cart;