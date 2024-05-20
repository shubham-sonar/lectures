import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const User = ({user}) => {
  return (
    <>
      <h4> Select the User Account </h4>
      <NavLink to="/user/1"> User 1 </NavLink>
      <NavLink to="/user/2"> User 2 </NavLink>
      <NavLink to="/user/3"> User 3 </NavLink>
      {user ? <Outlet/> : null}
      <Outlet />
    </>
  );
};

export default User;
