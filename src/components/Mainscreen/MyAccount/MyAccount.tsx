import s from "./MyAccount.module.css";
import User from "../../../assets/user.svg";

type Props = {};

export function MyAccount({}: Props) {
  return (
    <div>
      <div className={s.login}>
        <p className={s.loginName}>Кабинет</p>
        <div className={s.loginInner}>
          <img src={User} alt="" className={s.loginImg} width={40} />
        </div>
      </div>
    </div>
  );
}
