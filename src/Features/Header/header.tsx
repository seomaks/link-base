import style from "./header.module.css"
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <div className={style.header}>
      <Link to="login" className={style.item}>Login</Link>
      <Link to="/" className={style.item}>Link base</Link>
      <Link to="plans" className={style.item}>LB Plans</Link>
    </div>
  );
}