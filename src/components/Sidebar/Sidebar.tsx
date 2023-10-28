import s from "./Sidebar.module.css";
import Logo from "../../assets/logo.png";

import { SidebarItem } from "./SidebarItem/SidebarItem";

type Props = {};

export function Sidebar({}: Props) {
  return (
    <div>
      <div className={s.sidebarWrapper}>
        <div className={s.logo}>
          <img
            className={s.logoImg}
            src={Logo}
            alt="logo"
            width={250}
            height={100}
          />
        </div>
        <div className={s.sidebarItems}>
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
          <SidebarItem />
        </div>
      </div>
    </div>
  );
}
