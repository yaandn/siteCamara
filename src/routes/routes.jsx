import {  Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Vereadores from "../pages/Vereadores";
import Vereador from "../pages/Vereador";
import Sessoes from "../pages/Sessoes";



export default function RoutesApp() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="vereadores" element={<Vereadores/>}/>
        <Route path="vereadores/:id" element={<Vereador/>}/>
        <Route path="sessoes" element={<Sessoes/>}/>
      </Routes>
    
  );
}