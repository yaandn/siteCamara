import {  Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Vereadores from "../pages/Vereadores";
import Vereador from "../pages/Vereadores/Vereador";
import Sessoes from "../pages/Sessoes";
import Sessao from "../pages/Sessoes/Sessao";
import Legislacao from "../pages/Legislacao";
import Sobre from "../pages/Sobre";
import Noticias from "../pages/Noticias";




export default function RoutesApp() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="vereadores" element={<Vereadores/>}/>
        <Route path="vereadores/:id" element={<Vereador/>}/>
        <Route path="sessoes" element={<Sessoes/>}/>
        <Route path="sessoes/:id" element={<Sessao/>}/>
        <Route path="legislacao" element={<Legislacao/>}/>
        <Route path="noticias" element={<Noticias/>}/>
        <Route path="Sobre" element={<Sobre/>}/>
      </Routes>
    
  );
}