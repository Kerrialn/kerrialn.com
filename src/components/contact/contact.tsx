import React from "react";
import style from "./contact.module.css";
import { data } from "../../data/data";

interface IContactProps {}

export const Contact: React.FC<IContactProps> = (props): JSX.Element => {
  return (
    <div className={style.contact}>
      <div className={[style.card, style.w].join(" ")}>
        <div className={style.header}>Contact</div>
        <div
          className={[style.inner, style.flex, style.justifyBetween].join(" ")}
        >
          <div>
            <b>Phone</b>
          </div>
          <div>{data.phone}</div>
        </div>
        <div
          className={[style.inner, style.flex, style.justifyBetween].join(" ")}
        >
          <div>
            <b>Email</b>
          </div>
          <div>{data.email}</div>
        </div>
      </div>
    </div>
  );
};
