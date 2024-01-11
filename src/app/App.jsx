import RoutesApp from "../routes/routes"
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import InfoAccessProvider from "../context/InfoAccessContext";
import Footer from "../components/Footer";


function App() {
  return (
    <InfoAccessProvider>
      <BrowserRouter>
        <Header/>
        <RoutesApp/>
        <Footer/>
      </BrowserRouter>
    </InfoAccessProvider>
  );
}

export default App
