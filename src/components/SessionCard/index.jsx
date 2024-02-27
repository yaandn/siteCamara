import { Container, Header, Assunto } from "./style";
import { FaCalendarDays } from "react-icons/fa6";

export default function SessionCard({ data, numero, assunto }) {
  return (
    <Container>
      <Header>
        <div className="date">
          <FaCalendarDays />
          <span>{data}</span>
        </div>
        <span className="number">Nº {numero}</span>
      </Header>
      <Assunto>
        <span>{assunto}</span>
      </Assunto>
    </Container>
  );
}
