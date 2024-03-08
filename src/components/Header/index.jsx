import { Container, Navigation, Button, TopLine } from "./style";

import Info from "../../assets/imagens/info.png";
import Footer from "./Footer";
import AccessInfo from "../AccessInfo";
import { FaAlignJustify } from "react-icons/fa";

import logo from "../../assets/imagens/logo.png";
import logoTransparencia from "../../assets/imagens/logo-transparencia.png";
import { useLayoutEffect, useState } from "react";

import { Link } from "react-router-dom";
import { InfoAccessContext } from "../../context/InfoAccessContext";
import { useContext } from "react";

export default function Header() {
  const botoes = [
    {
      label: "CÂMARA",
      id: 1,
      link: "/",
    },
    {
      label: "VEREADORES",
      id: 2,
      link: "/vereadores",
    },
    {
      label: "COMISSÕES",
      id: 3,
      link: "/comissoes",
    },
  ];

  const [active, setActive] = useState(0);
  const { hover, setHover, isOpen, setIsOpen } = useContext(InfoAccessContext);
  const [width, setWitdh] = useState(0);

  function handlePageIndex(index) {
    sessionStorage.setItem("pageAtual", index);
    setActive(index);
  }

  useLayoutEffect(() => {
    const page = sessionStorage.getItem("pageAtual");
    const width = window.innerWidth;
    setActive(Number(page));
    setWitdh(width);
  }, []);

  return (
    <>
      <TopLine>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </TopLine>
      <Container>
        {width <= 500 && (
          <FaAlignJustify
            size={32}
            color="#158146"
            onClick={() => setIsOpen(true)}
          />
        )}
        <Navigation>
          <img src={logo} alt="logo-camâra" className="logo-camara" />
          {botoes.map((botao, index) => {
            return (
              <Link to={botao.link}>
                <Button
                  key={botao.id}
                  onClick={() => handlePageIndex(index)}
                  className={active === index ? "is-active" : "is-not-active"}
                >
                  <span>{botao.label}</span>
                </Button>
              </Link>
            );
          })}

          <Button
            className="access-info"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <img src={Info} alt="logo-info" />
            <span>ACESSO À INFORMAÇÃO</span>
          </Button>
          <a
            href="https://radar.tce.mt.gov.br/extensions/radar-da-transparencia-publica/radar-da-transparencia-publica.html"
            target="_blank"
            className="logo-radar"
          >
            <img src={logoTransparencia} alt="logo-radar-transparencia" />
          </a>
        </Navigation>
        <AccessInfo isOpen={hover} />
      </Container>

      <Footer />
    </>
  );
}
