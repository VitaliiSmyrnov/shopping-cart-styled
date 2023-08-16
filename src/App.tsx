import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { NotFound, SharedLayout } from "src/components";

const HomePage = lazy(() => import("src/pages/HomePage/HomePage"));
const CartPage = lazy(() => import("src/pages/CartPage/CartPage"));

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={SharedLayout}>
          <Route index element={HomePage} />
          <Route path="cart" element={CartPage} />
          <Route path="*" element={NotFound} />
        </Route>
      </Routes>
    </>
  );
};
