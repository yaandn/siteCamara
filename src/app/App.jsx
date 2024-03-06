import RoutesApp from "../routes/routes";
import Header from "../components/Header";
import MenuMobile from "../components/MenuMobile";
import { BrowserRouter } from "react-router-dom";
import InfoAccessProvider from "../context/InfoAccessContext";
import Footer from "../components/Footer";
import { register } from "swiper/element/bundle";

register();

function App() {
  return (
    <InfoAccessProvider>
      <BrowserRouter>
        <MenuMobile />
        <Header />
        <RoutesApp />
        <Footer />
      </BrowserRouter>
    </InfoAccessProvider>
  );
}

export default App;
