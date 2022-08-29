import React, { useEffect, useState } from "react";

import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage/MainPage";

import Header from "@components/Header/Header";

import ProductCard from "./pages/ProductCard/ProductCard";

export type Rating = {
  rate: number;
  count: number;
};
export interface AxiosResponses {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

function App() {
  const [productsData, setProductsData] = useState<any>();
  useEffect(() => {
    const fetch = async () => {
      const result = await axios
        .get<AxiosResponses[]>("https://fakestoreapi.com/products")
        .then((res) => {
          return res.data;
        });
      setProductsData(result);
    };
    fetch();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<MainPage productsData={productsData} />}
          />
          <Route
            path="/products"
            element={<MainPage productsData={productsData} />}
          />
          <Route path="/products">
            <Route
              path=":id"
              element={<ProductCard productsData={productsData} />}
            />
          </Route>

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
