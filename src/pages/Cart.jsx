import React from "react";
import EmptyCart from "../assets/empty_cart.svg"
import { Link } from "react-router-dom";


const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const TAX_RATE = 0.1; // 10% tax

  // Calculate totals
  const subtotal = cart.reduce((total, item) => {
    const price = item.salePrice || item.originalPrice;
    return total + price * item.quantity;
  }, 0);

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  // Handle empty cart
  if (!cart.length) {
    return <div className="cart__empty">
        <img src={EmptyCart} alt="" className="cart__empty--img"/> 
        <h2>Your Cart is Empty!</h2>
         <Link to="/books" className="btn btn__browse">
        Browse Books
      </Link>
    </div>;
    
  }

  return (
    <div id="books_body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <h2 className="cart__title">Cart</h2>
          </div>

          <div className="cart">
            {/* Cart header */}
            <div className="cart__header">
              <div className="cart__book">Book</div>
              <div className="cart__quantity">Quantity</div>
              <div className="cart__total">Price</div>
            </div>

            {/* Cart items */}
            <div className="cart__body">
              {cart.map((item) => (
                <div className="cart__item" key={item.id}>
                  <div className="cart__book">
                    <img
                      src={item.url}
                      className="cart__book--img"
                      alt={item.title}
                    />
                    <div className="cart__book--info">
                      <span className="cart__book--title">{item.title}</span>
                      <span className="cart__book--price">
                        ${item.salePrice || item.originalPrice}
                      </span>
                      <button
                        className="cart__book--remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="cart__quantity">
                    <input
                      type="number"
                      min={1}
                      max={99}
                      className="cart__input"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, e.target.value)
                      }
                    />
                  </div>

                  <div className="cart__total">
                    ${(item.salePrice || item.originalPrice) * item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Totals */}
          <div className="total">
            <div className="total__item total__sub-total">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="total__item total__tax">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="total__item total__price">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              className="btn btn__checkout no-cursor"
              onClick={() =>
                alert(`Checkout feature is not available at this time`)
              }
            >
              Proceed Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
