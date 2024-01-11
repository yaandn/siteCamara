import { Container, List, Item, Title } from "./styles";
import { sessionList }  from "../../data/InfoSessoes";
import { Link } from "react-router-dom";

export default function SessoesList() {
    return (
        <Container>
            <Title>Acompanhe aqui a lista de Sessões da Câmara Municipal</Title>
            <List>
                {sessionList.map((sessao) => {
                return (
                    <Item>
                        <Link to={`/sessoes/${sessao.id}`}>
                            <span className="item-title">Sessão ordinária do dia {sessao.data}</span>
                        </Link>
                    </Item> 
                );
            })}
            </List>
            
            

        </Container>

    ); 
}