import React from "react";
import { Outlet } from "react-router-dom";

const MyContact = () => {
  return (
    <div>
      <h2>MyContact : 888888888</h2>
      <Outlet />
      <h2>MyContact : 888888888</h2>
    </div>
  );
};

export default MyContact;
