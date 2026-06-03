import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";

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
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginBottom: "20px",
            background: "#ffffff10",
            padding: "15px",
            borderRadius: "10px"
          }}
        >

          <img
            src={item.img}
            alt={item.name}
            style={{
              width: "80px",
              borderRadius: "8px"
            }}
          />

          <div style={{ flex: 1 }}>

            <h4>{item.name}</h4>

            <p>
              Precio unitario: ${item.price}
            </p>

            {/* CONTADOR */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
            >

              <button
                onClick={() => decreaseQuantity(item.id)}
                style={{
                  width: "32px",
                  height: "32px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                -
              </button>

              <strong>{item.quantity}</strong>

              <button
                onClick={() => increaseQuantity(item.id)}
                style={{
                  width: "32px",
                  height: "32px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                +
              </button>

            </div>

          </div>

          <h4>
            ${item.price * item.quantity}
          </h4>

          <button
            onClick={() => handleRemoveItem(item.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 12px",
              cursor: "pointer",
              borderRadius: "6px"
            }}
          >
            Eliminar
          </button>

        </div>
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