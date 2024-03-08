import { Container, Content, Title, Text } from "./styles";
import Camara from "../../assets/imagens/camara.webp";
import TopPages from "../../components/TopPages";

export default function Sobre() {
  return (
    <Container>
      <TopPages title="SOBRE A CÂMARA" />
      <Content>
        <Title>História e Compromisso da Câmara Municipal de Aragoiânia</Title>
        <img src={Camara} alt="imagem-auditorio" />
        <Text>
          <p>
            Fundada em 1958 junto a emancipação política de Aragoiânia, a Câmara
            Municipal de Aragoiânia é uma instituição essencial para a
            democracia e o desenvolvimento do município. Ao longo dos anos, tem
            desempenhado um papel fundamental na representação dos interesses da
            população, na criação e fiscalização das leis locais e na promoção
            do bem-estar comunitário.
          </p>
          <p>
            A história da Câmara Municipal de Aragoiânia é marcada por momentos
            de desafio e superação, mas também por conquistas significativas em
            prol da comunidade. Desde sua criação, tem sido um espaço de debate,
            onde os vereadores eleitos pelo povo se reúnem para discutir os
            assuntos de interesse público, propor soluções e tomar decisões que
            impactam diretamente a vida dos cidadãos.
          </p>
          <p>
            Comprometida com a transparência, ética e responsabilidade, a Câmara
            Municipal de Aragoiânia trabalha diariamente para atender às
            necessidades da população e garantir uma gestão pública eficiente e
            democrática. Os vereadores, eleitos democraticamente, têm o
            compromisso de representar os interesses de todos os munícipios,
            independentemente de suas origens, crenças ou condições sociais.
          </p>
          <p>
            Além de sua função legislativa, a Câmara Municipal de Aragoiânia
            também exerce um importante papel fiscalizador, acompanhando de
            perto a aplicação dos recursos públicos e garantindo que estes sejam
            utilizados de forma transparente e em benefício da comunidade. Por
            meio de audiências públicas, debates e discussões, busca-se sempre o
            aprimoramento das políticas públicas e a busca por soluções que
            promovam o desenvolvimento sustentável e a qualidade de vida de
            todos os aragoianienses.
          </p>
          <p>
            Neste sentido, a Câmara Municipal de Aragoiânia reafirma seu
            compromisso com a democracia, a justiça social e o bem comum,
            trabalhando em parceria com a sociedade civil, o poder executivo e
            outras instituições, na construção de uma cidade mais justa,
            igualitária e próspera para as futuras gerações.
          </p>
        </Text>
      </Content>
    </Container>
  );
}
