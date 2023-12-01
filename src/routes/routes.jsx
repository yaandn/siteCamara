import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Vereadores from "../pages/vereadores";


export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="vereadores" element={<Vereadores/>}/>
      </Routes>
    </BrowserRouter>
  );
}