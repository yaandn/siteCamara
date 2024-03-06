import { Container, BoxInfo, Title, BoxLinks, TextLinks } from "./style";
import { infoAccess } from "../../data/InfoTransparencia";
import { InfoAccessContext } from "../../context/InfoAccessContext";
import { useContext } from "react";

export default function AccessInfo() {
  const { setHover, hover } = useContext(InfoAccessContext);

  return (
    <Container
      isopen={hover}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {infoAccess.map((campo) => {
        return (
          <BoxInfo>
            <Title>{campo.titulo}</Title>
            <BoxLinks>
              {campo.topicos.map((topico) => {
                return (
                  <a href={topico.link} target="_blank">
                    <TextLinks>{topico.tituloTopico}</TextLinks>
                  </a>
                );
              })}
            </BoxLinks>
          </BoxInfo>
        );
      })}
    </Container>
  );
}
