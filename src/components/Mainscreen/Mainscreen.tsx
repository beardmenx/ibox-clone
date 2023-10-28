import { Basket } from "./Basket/Basket";
import s from "./Mainscreen.module.css";
import { MyAccount } from "./MyAccount/MyAccount";
import { Search } from "./Search/Search";
import Phone from "../../assets/assetsColor/phone.svg";
import { ServiceItem } from "./Services/ServiceItem";

type Props = {};

export function Mainscreen({}: Props) {
  return (
    <div className={s.mainscreen}>
      <div className={s.mainscreenWrapper}>
        <Search />
        <div className={s.mainscreenInner}>
          <MyAccount />
          <Basket />
        </div>
      </div>
      <div className={s.titleWrapper}>
        <img src={Phone} alt="" />
        <h2 className={s.title}>Мобильная связь и телефон</h2>
      </div>
      <div className={s.serviceWrapper}>
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
    </div>
  );
}
