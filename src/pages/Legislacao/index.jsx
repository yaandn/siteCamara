import TopPages from "../../components/TopPages";

import { Container, Title, Text, DownloadArea, ButtonDownload } from "./styles";
import { GrDocumentDownload } from "react-icons/gr";

export default function Legislacao() {
  return (
    <>
      <TopPages title="LEGISLAÇÃO" />
      <Container>
        <Title>Regimento Interno e Lei Orgânica</Title>

        <Text>
          <p>
            O regimento interno de um município é um conjunto de normas que
            estabelece as regras e procedimentos para o funcionamento interno da
            administração e legislação municipal. Ele define as atribuições dos
            órgãos, as formas de organização e o processo de tomada de decisão
            dentro da estrutura municipal.
          </p>
          <p>
            Por outro lado, a Lei Orgânica é a legislação fundamental de um
            município, equivalente à Constituição Federal para o país ou a
            Constituição Estadual para o estado. Ela estabelece os princípios
            básicos da organização e funcionamento do município, incluindo a
            estrutura do governo, os direitos dos cidadãos e as competências
            municipais.
          </p>
          <p>
            Enquanto o regimento interno trata mais especificamente dos aspectos
            operacionais e administrativos do município, a Lei Orgânica tem um
            caráter mais amplo e estabelece os fundamentos políticos,
            administrativos e jurídicos da autonomia municipal, garantindo a sua
            governança e independência dentro do contexto federativo. Ambos os
            documentos são essenciais para a boa gestão e governabilidade do
            município.
          </p>
        </Text>

        <DownloadArea>
          <ButtonDownload href="https://drive.usercontent.google.com/u/0/uc?id=1MW5LPSP0ND3wfco84tUuerZM3zmMF6e9&export=download">
            <GrDocumentDownload size={32} />
            Acessar Regimento Interno
          </ButtonDownload>
          <ButtonDownload href="https://drive.usercontent.google.com/u/0/uc?id=1j914TUjeGwoZy_opjtdY7zqQsZzdTwo9&export=download">
            <GrDocumentDownload size={32} />
            Acessar Lei Orgânica
          </ButtonDownload>
        </DownloadArea>
      </Container>
    </>
  );
}
