import { useContext } from "react";
import { AppContext } from "../../context";

const CartHeader = () => {
  const { onCloseCart } = useContext(AppContext);

  return (
    <div className="cart__header">
      <h2 className="cart__header--title">Кошик</h2>
      <button
        aria-label="Close Cart"
        onClick={onCloseCart}
        className="cart__header--close"
      ></button>
    </div>
  );
};

export default CartHeader;
