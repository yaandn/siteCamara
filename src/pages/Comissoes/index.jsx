import { Container, Content, TitleContainer } from "./styles";
import TopPages from "../../components/TopPages";
import { FaBookmark } from "react-icons/fa";
import Card from "../../components/Card";
import {
  comissao1,
  comissao2,
  comissao3,
  comissao4,
} from "../../data/InfoVereadores";

export default function Comissoes() {
  return (
    <Container>
      <TopPages title="COMISSÕES PERMANENTES" />

      <Content>
        <TitleContainer>
          <FaBookmark className="icon" />
          <span className="title">Constituição, Justiça e Redação</span>
        </TitleContainer>
        <div className="box-container">
          {comissao1.map((comissao) => {
            return (
              <div className="item">
                <Card
                  foto={comissao.foto}
                  partido={comissao.partido}
                  nome={comissao.nome}
                  nano="nano"
                />
                <span className="cargo">{comissao.cargo}</span>
              </div>
            );
          })}
        </div>
      </Content>
      <Content>
        <TitleContainer>
          <FaBookmark className="icon" />
          <span className="title">Finanças e Orçamento</span>
        </TitleContainer>
        <div className="box-container">
          {comissao2.map((comissao) => {
            return (
              <div className="item">
                <Card
                  foto={comissao.foto}
                  partido={comissao.partido}
                  nome={comissao.nome}
                  nano="nano"
                />
                <span className="cargo">{comissao.cargo}</span>
              </div>
            );
          })}
        </div>
      </Content>
      <Content>
        <TitleContainer>
          <FaBookmark className="icon" />
          <span className="title">Obras e Serviços Públicos</span>
        </TitleContainer>
        <div className="box-container">
          {comissao3.map((comissao) => {
            return (
              <div className="item">
                <Card
                  foto={comissao.foto}
                  partido={comissao.partido}
                  nome={comissao.nome}
                  nano="nano"
                />
                <span className="cargo">{comissao.cargo}</span>
              </div>
            );
          })}
        </div>
      </Content>
      <Content>
        <TitleContainer>
          <FaBookmark className="icon" />
          <span className="title">Educação, Saúde e Assistência Social</span>
        </TitleContainer>
        <div className="box-container">
          {comissao4.map((comissao) => {
            return (
              <div className="item">
                <Card
                  foto={comissao.foto}
                  partido={comissao.partido}
                  nome={comissao.nome}
                  nano="nano"
                />
                <span className="cargo">{comissao.cargo}</span>
              </div>
            );
          })}
        </div>
      </Content>
    </Container>
  );
}
