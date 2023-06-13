import React from "react";

import { Route, Routes } from "react-router-dom";
import { Home, NotFound404, Basket, CategoryDetail, ProductDetail } from './pages';
import { Footer, Header, Notification } from "./components";
import { Provider } from "react-redux";
import {shopDataStore} from "./data/DataStore";
const App = () => {

  return (
    <Provider store={shopDataStore}>
    <>
          <Header/>
          <main className="main">

          <Routes>
          <Route path="/" element={<Home />}/> <Route exact path="/:category" element={<CategoryDetail />} />
            <Route exact path="/basket" element={<Basket />} />
            <Route exact path="/:volume/:title" element={<ProductDetail />} />
            <Route path="*" element={<NotFound404/>} />
          </Routes>
          
      </main>
      <Footer />
        <Notification />
     
   
     
    </>
    </Provider>
  );
};

export default App;
