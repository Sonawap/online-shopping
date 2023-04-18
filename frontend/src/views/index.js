import React from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from './Landing';
import NotFound from './Error/404';
import Header from 'components/shared/header';

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
            path="*" 
            element={<NotFound title="Page not found" />} 
          />
        </Routes>
      </div>
    </>
  );
}

export default Views;