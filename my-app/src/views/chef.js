import React from 'react';
import '../css/App.css';
import { GetOrder } from '../components/PendingOrders';
import { Header } from '../components/Header';

export const Chef = () => {
  return (
    <div>
      <Header />
      <GetOrder />
    </div>
  );
};
