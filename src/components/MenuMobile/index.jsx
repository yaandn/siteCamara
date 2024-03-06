import { useState } from "react";
import { Container, Header, Navigation, AreaButtons, Buttons } from "./style";
import { Link } from "react-router-dom";
import logo from "../../assets/imagens/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../Button";
import { FaCircleInfo } from "react-icons/fa6";
import transparencia from "../../assets/imagens/logo-transparencia.png";
import { useContext } from "react";
import { InfoAccessContext } from "../../context/InfoAccessContext";

export default function MenuMobile() {
  const navigation = [
    {
      id: "1",
      label: "INICIO",
      link: "/",
    },
    {
      id: "2",
      label: "LEGISLAÇÃO",
      link: "/legislacao",
    },
    {
      id: "3",
      label: "SOBRE",
      link: "/sobre",
    },
    {
      id: "4",
      label: "SESSÕES",
      link: "/sessoes",
    },
    {
      id: "5",
      label: "NOTÍCIAS",
      link: "/noticias",
    },
    {
      id: "6",
      label: "VEREADORES",
      link: "/vereadores",
    },
  ];

  const { isOpen, setIsOpen } = useContext(InfoAccessContext);

  return (
    <Container isOpen={isOpen}>
      <Header>
        <img src={logo} alt="logo-camara" />

        <IoCloseSharp size={40} color="#fff" onClick={() => setIsOpen(false)} />
      </Header>
      <Navigation>
        {navigation.map((item) => {
          return (
            <Link
              to={item.link}
              key={item.id}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
            </Link>
          );
        })}
      </Navigation>
      <AreaButtons>
        <Buttons
          className="access-info"
          href="https://camaraaragoiania.megasofttransparencia.com.br/"
          target="_blank"
        >
          <FaCircleInfo size={26} />
          <span>Acesso à informação</span>
        </Buttons>
        <Buttons
          href="https://radar.tce.mt.gov.br/extensions/radar-da-transparencia-publica/radar-da-transparencia-publica.html"
          target="_black"
        >
          <img src={transparencia} alt="logo-transparencia" />
        </Buttons>
      </AreaButtons>
    </Container>
  );
}
