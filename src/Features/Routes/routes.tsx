import {Navigate, Route, Routes } from "react-router-dom";
import {Table} from "../../Components/Link base/table";
import {Login} from "../Login/login";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Table/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="/404" element={<h1>404: PAGE NOT FOUND</h1>}/>
      <Route path="*" element={<Navigate to="/404"/>}/>
    </Routes>
  );
}