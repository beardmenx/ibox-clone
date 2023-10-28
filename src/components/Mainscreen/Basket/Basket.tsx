import s from "./Basket.module.css";
import BasketImg from "../../../assets/basket.svg";

type Props = {};

export function Basket({}: Props) {
  return (
    <div>
      <div className={s.basket}>
        <p className={s.basketName}>Корзина</p>
        <div className={s.basketInner}>
          <img src={BasketImg} alt="" className={s.basketImg} width={35} />
        </div>
      </div>
    </div>
  );
}
