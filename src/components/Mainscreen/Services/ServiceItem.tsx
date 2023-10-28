import s from "./ServiceItem.module.css";
import Sfr from "../../../assets/operatorAssets/sfr.webp";

type Props = {};

export function ServiceItem({}: Props) {
  return (
    <>
      <div className={s.serviceItem}>
        <a className={s.serviceItemLink} href="#">
          <img className={s.serviceItemImg} src={Sfr} alt="" />
        </a>
      </div>
    </>
  );
}
