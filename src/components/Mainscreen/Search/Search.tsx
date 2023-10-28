import s from "./Search.module.css";
import SearchIcon from "./../../../assets/search.svg";
type Props = {};

export function Search({}: Props) {
  return (
    <>
      <div className={s.search}>
        <img src={SearchIcon} alt="Search Icon" className={s.searchImg} />
        <input className={s.searchInput} type="text" placeholder="Search" />
      </div>
    </>
  );
}
