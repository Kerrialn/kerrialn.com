import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link className={style.title} to='/'>
        Kerrial N
      </Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
};
