import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { getTotalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      style={{
        textDecoration: "none",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "5px"
      }}
    >

      🛒

      <span>
        {getTotalQuantity()}
      </span>

    </Link>
  );
};

export default CartWidget;