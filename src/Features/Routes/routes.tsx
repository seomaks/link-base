import {Navigate, Route, Routes } from "react-router-dom";
import {LinkBase} from "../../Components/LinkBase/link-base";
import {Login} from "../Login/login";
import {LbPlans} from "../../Components/LB plans/PlansList/lb-plans";
import {MightyGlobal} from "../../Components/LB plans/Projects/mighty-global";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LinkBase/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="plans" element={<LbPlans/>}/>
      <Route path="plans/mightytips-com" element={<MightyGlobal/>}/>
      <Route path="/404" element={<h1>404: PAGE NOT FOUND</h1>}/>
      <Route path="*" element={<Navigate to="/404"/>}/>
    </Routes>
  );
}