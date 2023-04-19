import React from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from './Landing';
import NotFound from './Error/404';
import Header from 'components/shared/header';
import Chat from './Cart';
import PaymentSuccess from './Cart/Payment/successful';
import PaymentCancel from './Cart/Payment/cancel';
import Product from './Product';
import Category from './Category';

const Views = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={<Landing title="Landing Page"/>}
          />
          <Route
            path="/cart"
            element={<Chat title="Your Cart"/>}
          />
          <Route
            path="/product/:id"
            element={<Product title="Product Details"/>}
          />
          <Route
            path="/category/:id"
            element={<Category title="Category Details"/>}
          />
          <Route
            path="/payment/success"
            element={<PaymentSuccess title="Payment was successful"/>}
          />
          <Route
            path="/payment/cancel"
            element={<PaymentCancel title="Payment was canceled"/>}
          />
          <Route 
            path="*" 
            element={<NotFound title="Page not found" />} 
          />
        </Routes>
      </div>
    </>
  );
}

export default Views;