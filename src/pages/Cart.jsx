import React from "react";

const Cart = () => {
    return(
        <div id="books_body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <h2 className="cart__title">Cart</h2>
                    </div>
                    <div className="cart">
                        <div className="cart__header">
                            <div className="cart__book">Book</div>
                            <div className="cart__quantity">Quanity</div>
                            <div className="cart__total">Price</div>
                        </div>
                        <div className="cart__body">
                            <div className="cart__item">
                                <div className="cart__book">
                                    <img src="https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg"
                                     className="cart__book--img" 
                                     alt="" />
                                     <div className="cart__book--info">
                                        <span className="cart__book--title">
                                            Atomic Habbits
                                            </span>
                                            <span className="cart__book--price">
                                                $10.00
                                            </span>
                                            <button className="cart__book--remove">
                                                Remove
                                            </button>
                                     </div>
                                </div>
                                <div className="cart__quantity">
                                    <input type="number" min={0} max={99} className="cart__input"/>
                                </div>
                                <div className="cart__total">
                                    $10.00
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <div className="total__item total__sub-total">
                            <span>Subtotal</span>
                            <span>$9.00</span>
                        </div>
                        <div className="total__item total__tax">
                            <span>Tax</span>
                            <span>$2.00</span>
                        </div>
                        <div className="total__item total__price">
                            <span>Total</span>
                            <span>$11.00</span>
                        </div>
                        <button className="btn btn__checkout no-cursor" onClick={() => alert(`Checkout feature is not available at this time`)}> Proceed Checkout</button>
                    </div>
                </div>
            </main>
        </div>

    )

}

export default Cart;