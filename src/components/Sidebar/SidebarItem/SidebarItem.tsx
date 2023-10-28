import React from "react";
import s from "./SidebarItem.module.css";
import Phone from "../../../assets/phone.svg";

type Props = {};

export function SidebarItem({}: Props) {
  return (
    <div>
      <div className={s.item}>
        <a href="#">
          <img src={Phone} alt="" className={s.itemImg} />
          <p className={s.itemText}>Мобильная связь и телефон</p>
        </a>
      </div>
    </div>
  );
}
