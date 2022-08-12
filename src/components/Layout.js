import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
const Layout = () => {
  let total = 0;
  const itemsList = useSelector(state => state.cart.itemsList);
  const showCart = useSelector(state => state.cart.showCart);

  itemsList.forEach(item => {
    total += item.totalPrice;
  });

  const dispatch = useDispatch();
  const placeOrder = () => {
    dispatch(cartActions.setShowCart());
  }


  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        {!showCart && <Products />}
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn" onClick={placeOrder}>Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
