import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../../Hooks/useCart";

// todo
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <SectionTitle heading={"Payment "} subHeading={"Hurry Up"}></SectionTitle>
      <h2 className="font-bold text-4xl text-center">Payment</h2>

      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
