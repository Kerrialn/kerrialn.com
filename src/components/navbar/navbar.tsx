import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "./assests/logo.png";

export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img className={style.logo} src={logo} />
      <Link className={style.title} to='/'>
        <div className={style.titleText}>Kerrial N</div>
      </Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
};
