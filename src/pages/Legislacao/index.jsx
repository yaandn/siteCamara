import TopPages from "../../components/TopPages";
import Button from "../../components/Button";
import { Container, Content, Title, Text, DownloadArea } from "./styles";

export default function Legislacao() {
  return (
    <>
      <TopPages title="LEGISLAÇÃO" />
      <Container>
        <Content>
          <Title>Regimento Interno e Lei Orgânica</Title>
          <Text>
            <p>
              O regimento interno de um órgão público ou instituição é um
              conjunto de normas que estabelece as regras e procedimentos para o
              funcionamento interno da administração da instituição. Ele define
              as atribuições, as formas de organização e o processo de tomada de
              decisão dentro da estrutura de um órgão.
            </p>
            <p>
              Por outro lado, a Lei Orgânica é a legislação fundamental de um
              município, equivalente à Constituição Federal para o país ou a
              Constituição Estadual para o Estado. Ela estabelece os princípios
              básicos da organização e funcionamento do município, incluindo a
              estrutura do governo, os direitos dos cidadãos e as competências
              municipais.
            </p>
            <p>
              Enquanto o regimento interno trata mais especificamente dos
              aspectos operacionais e administrativos de um órgão específico, a
              Lei Orgânica tem um caráter mais amplo e estabelece os fundamentos
              políticos, administrativos e jurídicos da autonomia municipal,
              garantindo a sua governança e independência dentro do contexto
              federativo. Ambos os documentos são essenciais para a boa gestão e
              governabilidade do município.
            </p>
          </Text>
          <DownloadArea>
            <Button
              title="Acessar Regimento Interno"
              link="https://drive.google.com/file/d/1MW5LPSP0ND3wfco84tUuerZM3zmMF6e9/view?usp=sharing"
            />
            <Button
              title="Acessar Lei Orgânica"
              link="https://drive.google.com/file/d/1j914TUjeGwoZy_opjtdY7zqQsZzdTwo9/view?usp=sharing"
            />
          </DownloadArea>
        </Content>
      </Container>
    </>
  );
}
