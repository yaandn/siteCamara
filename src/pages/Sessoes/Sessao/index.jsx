import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { sessionList } from "../../../data/InfoSessoes";
import TopPages from "../../../components/TopPages";
import Session from "../../../components/Session";
import {
  Container,
  BoxSession,
  InfoSession,
  MattersSession,
  MattersList,
  Title,
  LiveSession,
  DownloadArea,
} from "./styles.js";
import Button from "../../../components/Button/index.jsx";

export default function Sessao() {
  const { id } = useParams();
  const [sessao, setSessao] = useState({});
  const [assuntos, setAssuntos] = useState([]);

  useEffect(() => {
    const sessaoFiltrada = sessionList.find((sessao) => sessao.id === id);
    setSessao(sessaoFiltrada);
    setAssuntos(sessaoFiltrada.assuntos);
  }, []);

  return (
    <Container>
      <TopPages title={`SESSÃO ORDINÁRIA ${id}`} />
      <BoxSession>
        <InfoSession>
          <span>Data: {sessao.data}</span>
          <span>Número da Sessão: {id}</span>
        </InfoSession>

        <MattersSession>
          <Title>Assuntos da sessão</Title>
          <MattersList>
            {assuntos.map((assunto) => {
              return (
                <li>
                  <span className="text_matters">{assunto}</span>
                </li>
              );
            })}
          </MattersList>
        </MattersSession>
        <LiveSession>
          <Title>Live da Sessão</Title>
          <Session
            sessionLive={
              "https://www.instagram.com/reel/C3DEiB3uNSr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            }
          ></Session>
        </LiveSession>
        <DownloadArea>
          <Button title="Acessar a pauta da Sessão" link={sessao.link_pauta} />
        </DownloadArea>
      </BoxSession>
    </Container>
  );
}
