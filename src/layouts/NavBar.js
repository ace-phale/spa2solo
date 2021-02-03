import React from "react";
import { Route, NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const paths = [
  { name: "Start", exact: true, path: "/" },
  { name: "Posty", path: "/postlist" },
  { name: "Kontakt", path: "/contact" },
  { name: "O nas", path: "/aboutus" },
];

const NavBar = () => {
  const menu = paths.map((path) => (
    <li key={path.name}>
      <NavLink to={path.path} exact={path.exact}>
        {path.name}
      </NavLink>
    </li>
  ));
  return <ul>{menu}</ul>;
};

export default NavBar;
