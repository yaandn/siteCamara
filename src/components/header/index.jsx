import { Container, Navigation, Button,TopLine } from "./style"
import { FaCircleInfo } from "react-icons/fa6";
import Footer from "./Footer";
import logo from '../../assets/imagens/logo.png'


export default function Header() {
  return (
    <>
      <TopLine>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </TopLine>
      <Container>
        <Navigation>
          <img src={logo} alt="logo-camâra" />
          <Button>
            <span>VEREADORES</span>
          </Button>
          <Button>
            <span>CAMÂRA</span>
          </Button>
          <Button transparencia={true}>
            <FaCircleInfo
              size={28}
              color="#158146"
            
            />
            <span>Acesso a informação</span>
          </Button>
        </Navigation>
      </Container>
      <Footer/>
    </>
   
  ) 
} 