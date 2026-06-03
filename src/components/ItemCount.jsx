import { useState } from "react";
import Swal from "sweetalert2";

const ItemCount = ({ stock, initial = 1, onAdd }) => {

  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {

    onAdd(count);

    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: `Se agregaron ${count} unidad(es) al carrito`,
      timer: 1500,
      showConfirmButton: false,
      background: "#002b2b",
      color: "#f3e5ab"
    });

    setCount(initial);

  };

  return (
    <div style={styles.wrapper}>

      {/* CONTADOR */}
      <div style={styles.counterBox}>

        <button
          onClick={decrease}
          style={styles.btn}
        >
          −
        </button>

        <span style={styles.count}>
          {count}
        </span>

        <button
          onClick={increase}
          style={styles.btn}
        >
          +
        </button>

      </div>

      {/* BOTÓN AGREGAR */}
      <button
        onClick={handleAdd}
        disabled={stock === 0}
        style={{
          ...styles.addBtn,
          opacity: stock === 0 ? 0.5 : 1,
          cursor: stock === 0 ? "not-allowed" : "pointer"
        }}
      >
        Agregar al carrito
      </button>

    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    marginTop: "18px"
  },

  counterBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #c19a6b",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#002b2b"
  },

  btn: {
    width: "38px",
    height: "38px",
    backgroundColor: "#002b2b",
    color: "#f3e5ab",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    transition: "0.2s"
  },

  count: {
    width: "45px",
    textAlign: "center",
    fontWeight: "bold",
    color: "#002b2b",
    backgroundColor: "#f3e5ab",
    fontSize: "16px",
    padding: "6px 0"
  },

  addBtn: {
    padding: "10px 18px",
    backgroundColor: "#c19a6b",
    color: "#002b2b",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "14px",
    letterSpacing: "0.5px",
    transition: "0.2s"
  }
};

export default ItemCount;