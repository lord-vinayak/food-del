import { StoreContext } from "@/context/StoreContext";
import "./Cart.css";
import React, { useContext } from "react";
import Counter from "../../../components/comp-104";
import SlideArrowButton from "../../../components/animata/slide-button";
import PromoIn from "../../../components/comp-22";
import { MorphingText } from "../../components/magicui/morphing-text";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart, getTotalAmount } =
    useContext(StoreContext);
  const events = ["Choose Items", "Edit Items", "Add Address", "Payment"];
  const hasItems = Object.values(cartItems).some((qty) => qty > 0);
  const navigate = useNavigate();
  return (
    <div className="cart">
      {hasItems ? (
        <div className="right-side">
          <div className="cart-items">
            <div className="cart-items-title">
              <p className="items">Items</p>
              <p className="title">Title</p>
              <p className="price">Price</p>
              <p className="quantity">Quantity</p>
              <p className="total">Total</p>
            </div>
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div>
                    <div className="cart-items-title cart-items-item">
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>Rs.{item.price}</p>
                      <p>
                        <Counter
                          add={() => addToCart(item._id)}
                          rem={() => removeFromCart(item._id)}
                          initialValue={cartItems[item._id]}
                        />
                      </p>
                      <p>Rs.{item.price * cartItems[item._id]}</p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2 className="text-base">Your Bill</h2>
              <div>
                <div className="details">
                  <p>Subtotal</p>
                  <p>Rs.{getTotalAmount()}</p>
                </div>
                <hr />
                <div className="details">
                  <p>Platform Fee</p>
                  <p>Rs.{Number(getTotalAmount()) === 0 ? 0 : 19}</p>
                </div>
                <hr />
                <div className="details">
                  <p>Grand Total</p>
                  <p>
                    Rs.
                    {Number(getTotalAmount()) === 0
                      ? 0
                      : Number(getTotalAmount()) + 19}
                  </p>
                </div>
              </div>
              <div onClick={() => navigate("/order")} class="button-wrapper">
                <SlideArrowButton text="Checkout" primaryColor="#F4631E" />
              </div>
            </div>
            <div className="promocode">
              <div>
                <div className="promocode-input">
                  <PromoIn placeholderText="PROMOCODE" buttonText="ENTER!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <MorphingText texts={["Waiting", "for", "your", "order"]} />
        </div>
      )}
    </div>
  );
};

export default Cart;
