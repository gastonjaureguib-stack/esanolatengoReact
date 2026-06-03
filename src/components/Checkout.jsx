import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

import {
  addDoc,
  collection,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../service/firebase";

import Swal from "sweetalert2";

const Checkout = () => {

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {

    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // VALIDACIÓN
    if (
      !buyer.name.trim() ||
      !buyer.phone.trim() ||
      !buyer.email.trim()
    ) {

      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Debes completar todos los datos.",
        confirmButtonColor: "#c19a6b"
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

      const docRef = await addDoc(
        ordersRef,
        order
      );

      Swal.fire({
        icon: "success",
        title: "¡Compra realizada!",
        html: `
          <p>Tu pedido fue generado correctamente.</p>
          <br/>
          <strong>Número de orden:</strong>
          <br/>
          ${docRef.id}
        `,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#c19a6b",
        background: "#002b2b",
        color: "#f3e5ab"
      });

      setOrderId(docRef.id);

      clearCart();

    } catch (error) {

      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo generar la orden.",
        confirmButtonColor: "#c19a6b"
      });

    }

  };

  // ==========================
  // ORDEN GENERADA
  // ==========================
  if (orderId) {

    return (

      <div className="container my-5 text-light text-center">

        <h1>
          ¡Gracias por tu compra!
        </h1>

        <p className="mt-4">
          Tu número de orden es:
        </p>

        <h3
          style={{
            color: "#f3e5ab"
          }}
        >
          {orderId}
        </h3>

      </div>

    );
  }

  return (

    <div className="container my-5 text-light">

      <h2 className="mb-4">
        Checkout
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />

        <h4 className="mb-4">
          Total a pagar: ${getTotalPrice()}
        </h4>

        <button
          type="submit"
          className="btn btn-success"
        >
          Finalizar compra
        </button>

      </form>

    </div>

  );
};

export default Checkout;