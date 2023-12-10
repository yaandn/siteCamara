import RoutesApp from "../routes/routes"
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import InfoAccessProvider from "../context/InfoAccessContext";


function App() {
  return (
    <InfoAccessProvider>
      <BrowserRouter>
        <Header/>
        <RoutesApp/>
      </BrowserRouter>
    </InfoAccessProvider>
  );
}

export default App
