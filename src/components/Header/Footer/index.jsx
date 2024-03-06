import { Container } from "./style";
import { Link } from "react-router-dom";

export default function Footer() {
  const navItens = [
    { id: "1", title: "LEGISLAÇÃO", link: "/legislacao" },
    { id: "2", title: "SOBRE A CÂMARA", link: "/sobre" },
    { id: "3", title: "SESSÕES E DELIBERAÇÕES", link: "/sessoes" },
    { id: "4", title: "NOTICIAS", link: "/noticias" },
    {
      id: "5",
      title: "TRANSPARÊNCIA",
      link: "https://camaraaragoiania.megasofttransparencia.com.br/",
    },
  ];
  return (
    <Container>
      <nav>
        {navItens.map((item) => {
          if (item.id === "5") {
            return (
              <a href={item.link} key={item.id} target="_blank">
                <span>{item.title}</span>
              </a>
            );
          } else {
            return (
              <Link to={item.link} key={item.id}>
                <span>{item.title}</span>
              </Link>
            );
          }
        })}
      </nav>
    </Container>
  );
}
