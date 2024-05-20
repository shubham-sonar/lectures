// This router will have the dynamic Routes, useParams, nested Routes.

import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Contacts from "./Contacts";
import Home from "./Home";
import User from "./User";
import Active from "./Active";

const RouterApp = () => {
  return (
    <div>
      <p> This is the RouterApp </p>
      <NavBar />
      <Routes>
        <Route path="/" element="Please Select Route Above" />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="nested" element={<h1>The nested component</h1>} />
          <Route path=":id" element={<Active />} />
        </Route>
        <Route path="*" element={"sorry no element to display..!"} />
      </Routes>
    </div>
  );
};

export default RouterApp;
