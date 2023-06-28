import style from "../Projects/mighty-global.module.css";
import {Link} from "react-router-dom";

export const MightyGlobal = () => {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <Link to="login" className={style.item}>Date</Link>
        <Link to="mightytips-com" className={style.item}>Outreach</Link>
        <Link to="plans" className={style.item}>Banners</Link>
      </div>
      <p>test</p>
    </div>
  )
}