import React from "react";
import "../css/App.css";
import { GetOrder } from "../components/PendingOrders";
import { Header } from "../components/Header";
import { NavChef } from "../components/Nav-chef";

export const Chef = () => {
  return (
    <div>
      <Header></Header>
      {/* <button>Enviado</button>
      <button>Pendiente</button> */}
      <NavChef/>
      <GetOrder/>
    </div>
  )
}