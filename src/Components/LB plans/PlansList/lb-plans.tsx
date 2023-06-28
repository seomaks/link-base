import style from "./lb-plans.module.css";
import {Link} from "react-router-dom";

export const LbPlans = () => {
  return (
    <div className={style.main}>
      <div className={style.gambList}>
    <h2>Gambling</h2>
      <ul>
        <li><Link to="mightytips-com" className={style.item}>Casinocanada.com</Link></li>
      </ul>
      </div>
      <div  className={style.betList}>
    <h2>Betting</h2>
      <ul>
        <li><Link to="mightytips-com" className={style.item}>Mightytips.com</Link></li>
      </ul>
      </div>
    </div>
  )
}