import RoutesApp from "../routes/routes"
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <RoutesApp/>
    </BrowserRouter>
  );
}

export default App
