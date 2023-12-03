import { Container, Header } from "./styles";
import TopPages from "../../components/TopPages"
import VereadorsList from "../../components/VereadoresList";



export default function Vereadores () {
  return (
    <Container>
      <Header>
        <TopPages title='VEREADORES'/>
      </Header>
      <VereadorsList/>
    </Container>
  );
}