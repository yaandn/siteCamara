import { Container} from "./styles";
import TopPages from "../../components/TopPages"
import VereadorsList from "../../components/VereadoresList";



export default function Vereadores () {
  return (
    <Container> 
      <TopPages title='VEREADORES'/>
      <VereadorsList/>
    </Container>
  );
}