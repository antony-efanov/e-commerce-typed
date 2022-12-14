const CartInfo = ({ onCloseCart, imgSrc, title, text }) => {
  return (
    <div className="cart__info">
      <img
        width={100}
        className="cart__info--img"
        src={imgSrc}
        alt="cartInfo"
      />
      <h3 className="cart__info--title">{title}</h3>
      <p className="cart__info--text">{text}</p>
      <button onClick={onCloseCart} className="cart__info--btn">
        <img
          src="/e-commerce-ua-merch/img/icons/arrow-left.svg"
          alt="arrow-left"
        />
        Повернутися
      </button>
    </div>
  );
};

export default CartInfo;
