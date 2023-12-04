import {  Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Vereadores from "../pages/Vereadores";


export default function RoutesApp() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="vereadores" element={<Vereadores/>}/>
      </Routes>
    
  );
}