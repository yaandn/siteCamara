import TopPages from "../../components/TopPages";
import SessoesList from "../../components/SessoesList";

import { Container } from "./style";


export default function Sessoes () {
    return (
        <Container>
            <TopPages title='SESSÕES E DELIBERAÇÕES'/>
            
            <SessoesList/>
        </Container>
    ); 
}