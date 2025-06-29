import React, { useContext } from "react";
import "./Order.css";
import AccordianInput from "./accordian-input";
import { StoreContext } from "../../context/StoreContext";
import SlideArrowButton from "../../../components/animata/slide-button";

const Order = () => {
  const {getTotalAmount} = useContext(StoreContext)
  return (
    <div className="order-container">
      <div className="order-left">
        <h2>Complete your order</h2>
        <AccordianInput />
      </div>
      <div className="order-right">
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
              <p>Rs.19</p>
            </div>
            <hr />
            <div className="details">
              <p>Grand Total</p>
              <p>Rs.{getTotalAmount() + 19}</p>
            </div>
          </div>
          <div class="button-wrapper">
            <SlideArrowButton text="PAY NOW" primaryColor="#F4631E" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
