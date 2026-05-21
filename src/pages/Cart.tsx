import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";

const Cart: React.FC = () => {
  const { cart, removeCart, totalItems, totalPrice } = useContext(CartContext);

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            {" "}
            <h2>Your cart is empty</h2>{" "}
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.images[0]} alt={item.title} />

                  <div className="cart-info">
                    <h3>{item.title}</h3>

                    <p>${item.price}</p>
                  </div>

                  <button onClick={() => removeCart(item.id)}>Remove</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total Items: {totalItems}</h2>
              <h2>Total Price: ${totalPrice}</h2>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
