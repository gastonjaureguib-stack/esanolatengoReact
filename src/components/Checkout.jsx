import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

import {
  addDoc,
  collection,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../service/firebase";

import Swal from "sweetalert2";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  // ✅ AHORA RECIBE DATA DEL FORM
  const handleSubmitOrder = async (buyer) => {

    if (!buyer.name || !buyer.phone || !buyer.email) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
      });
      return;
    }

    try {

      const order = {
        buyer,
        items: cart,
        total: getTotalPrice(),
        date: serverTimestamp()
      };

      const ordersRef = collection(db, "orders");

      const docRef = await addDoc(ordersRef, order);

      setOrderId(docRef.id);
      clearCart();

      Swal.fire({
        icon: "success",
        title: "¡Compra realizada!",
        text: `Orden: ${docRef.id}`,
        confirmButtonColor: "#c19a6b"
      });

    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Error al generar la orden"
      });
    }
  };

  // SI YA HAY ORDEN
  if (orderId) {
    return (
      <div className="container my-5 text-center text-light">
        <h1>¡Gracias por tu compra!</h1>
        <p>Número de orden:</p>
        <h3 style={{ color: "#f3e5ab" }}>{orderId}</h3>
      </div>
    );
  }

  return (
    <div className="container my-5 text-light">

      <h2 className="mb-4">Checkout</h2>

      <CheckoutForm
        handleSubmitOrder={handleSubmitOrder}
        total={getTotalPrice()}
      />

    </div>
  );
};

export default Checkout;