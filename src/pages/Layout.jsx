import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Basket from "./Basket/Basket";
import NotFound404 from "./Home/NotFound404";
import { Header } from "../components";
import { Provider } from "react-redux";
import {shopDataStore} from "./../data/DataStore";
const Layout = () => {

  return (
    <Provider store={shopDataStore}>
    
    <>
   
   
          {/* <Navbar/> */}
          <Header/>
          <main className="main">

          <Routes>
          <Route path="/" element={<Home />}/>
      <Route path="/basket" element={<Basket />} />
      <Route path="*" element={<NotFound404/>} />
          </Routes>
          
      </main>
     
   
     
    </>
    </Provider>
  );
};

export default Layout;
