import { useState, useEffect } from "react";

import { Container, Content } from "./style";
import { vereadoresList } from "../../data/InfoVereadores";
import Card from "../Card";

export default function MesaDiretora() {
  const [mesaDir, setMesaDir] = useState([]);

  useEffect(() => {
    const mesaDiretora = vereadoresList.filter(
      (vereador) => vereador.mesaDiretora
    );
    console.log(mesaDiretora);
    setMesaDir(mesaDiretora);
  }, []);

  return (
    <Container>
      <span className="title">Mesa Diretora</span>
      <Content>
        {mesaDir.map((vereador) => {
          return (
            <div className="item">
              <Card
                foto={vereador.foto}
                partido={vereador.partido}
                nome={vereador.nome}
                nano="nano"
              />
              <span className="cargo">{vereador.cargo}</span>
            </div>
          );
        })}
      </Content>
    </Container>
  );
}
