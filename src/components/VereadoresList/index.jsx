import { BoxContainer, Container, Card, Footer } from "./styles";
import  {vereadoresList}  from "../../data/InfoVereadores";


export default function VereadorsList() {
    
    return (
        <Container>
            <BoxContainer>
                {vereadoresList.map((vereador, index)=> {
                    return (
                        <Card key={index}>
                            <img src={vereador.foto} alt='foto-vereador' className="foto-vereador" />
                            <Footer>
                                <div className="partido">
                                    <span>{vereador.partido}</span>
                                </div>
                                <div className="box-name">
                                    <span>{vereador.nome}</span>
                                </div>
                            </Footer>
                        </Card>
                    )
                })}
            </BoxContainer>
        </Container>
    );
}