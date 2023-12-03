import { Container, Navigation, Button,TopLine } from "./style"
import { FaCircleInfo } from "react-icons/fa6";
import Footer from "./Footer";
import logo from '../../assets/imagens/logo.png'
import { useState } from "react";


export default function Header() {

  const botoes = [
    {
      label: 'CAMÂRA',
      id: 1
    },
    {
      label: 'VEREADORES',
      id: 2

    }
  ]

  const [isAtive, setIsAtive] = useState(1)
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
          {botoes.map((botao, index) => {
            return (
              <Button
                key={botao.id}
                onClick={()=> setIsAtive((index))}
                isAtive ={isAtive}
                className={
                  isAtive === index
                  ? 'isActive'
                  : 'isNotActive'
                }
              >
                {console.log(isAtive)}
                <span>{botao.label}</span>
              </Button>
            )
          })}
          <Button className="transparencia">
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