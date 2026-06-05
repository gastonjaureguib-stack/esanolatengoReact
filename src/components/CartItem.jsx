const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  handleRemoveItem
}) => {

  return (
    <div
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
  );
};

export default CartItem;