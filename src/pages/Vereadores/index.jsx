import { Container } from "./styles";
import TopPages from "../../components/TopPages";
import VereadorsList from "../../components/VereadoresList";
import MesaDiretora from "../../components/MesaDiretora";

export default function Vereadores() {
  return (
    <Container>
      <TopPages title="VEREADORES" />
      <VereadorsList />
      <MesaDiretora />
    </Container>
  );
}
