import React from "react";
import "../css/App.css";
import { GetOrder } from "../components/PendingOrders";
import { Header } from "../components/Header";
import { NavChef } from "../components/Nav-chef";
// import { ReadyOrders } from './ready';

export const Chef = () => {
  return (
    <div>
      <Header></Header>
      <NavChef></NavChef>
      <GetOrder />
      {/* <ReadyOrders></ReadyOrders> */}
    </div>
  )
}