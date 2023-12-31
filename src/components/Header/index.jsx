
import { Container, Navigation, Button,TopLine } from "./style"

import { FaCircleInfo } from "react-icons/fa6";
import Footer from "./Footer";
import AccessInfo from "../AccessInfo";

import logo from '../../assets/imagens/logo.png'
import logoTransparencia from '../../assets/imagens/logo-transparencia.png'
import { useLayoutEffect, useState } from "react";

import { Link } from "react-router-dom";
import { InfoAccessContext } from "../../context/InfoAccessContext";
import { useContext } from "react";



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

  const [active, setActive] = useState(0)
  const { hover, setHover} = useContext(InfoAccessContext);

  function handlePageIndex(index) {
    sessionStorage.setItem('pageAtual', index);
    setActive(index);
  }

  useLayoutEffect(() => {
    const page = sessionStorage.getItem('pageAtual');
    setActive(Number(page))
    console.log(hover);
    
    
  }, [])

  

  return (
    <>
      <TopLine>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </TopLine>
      <Container>
        <Navigation>
          <img src={logo} alt="logo-camâra" className="logo-camara" />
          {botoes.map((botao, index) => {
            return (
              
                <Link
                  to={
                    index === 1
                    ? "/vereadores"
                    : "/"
                  }
                  key={index}
                >
                  
                    <Button
                      key={botao.id}
                      onClick={() => handlePageIndex(index)}
                      className={
                        active === index
                        ? 'is-active'
                        : 'is-not-active'
                      }
                    >
                    <span>{botao.label}</span>
                    </Button>
                </Link>
                
              
            )
          })}

           
          
            <Button
              className="transparencia"
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            >
              <FaCircleInfo
                size={28}
                color="#158146"
            
              />
              <span>Acesso a informação</span>
            </Button>
            <a href="https://radar.tce.mt.gov.br/extensions/radar-da-transparencia-publica/radar-da-transparencia-publica.html" target="_blank" className="logo-radar"><img src={logoTransparencia} alt="logo-radar-transparencia" /></a>
            
          
        </Navigation>
      <AccessInfo isOpen={hover}/>  
      </Container>
      
      <Footer/>
    </>
   
  ) 
} 