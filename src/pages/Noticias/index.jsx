import { Container } from "./styles";
import InstaFeed from "../../components/InstaFeed";
import TopPages from "../../components/TopPages"

export default function Noticias() {
    return(
        <Container>
            <TopPages title={"NOTÍCIAS"}/>
            <InstaFeed>
            </InstaFeed>
        </Container>
    );
}