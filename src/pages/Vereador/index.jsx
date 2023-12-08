import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Container, BoxContainer, InfoContainer, BioContainer } from "./style";


import TopPages from "../../components/TopPages";
import Card from '../../components/Card'
import { vereadoresList } from "../../data/InfoVereadores";

export default function Vereador() {

    const {id} = useParams();
    const [vereador, setVereador] = useState({});

    

    useLayoutEffect(() => {
        const vereadorSelecionado = vereadoresList.find((vereador)=> vereador.id == id)
        setVereador(vereadorSelecionado);  
    }, [])

    return (
        <Container>
            <TopPages title={vereador.nome} />
            <BoxContainer>
                <InfoContainer>
                    <Card
                        foto={vereador.foto}
                        partido={vereador.partido}
                        nome={vereador.nome}
                        nano="nano"
                    />


                </InfoContainer>
                <BioContainer>

                </BioContainer>
            </BoxContainer>
        

        </Container>

    )
}