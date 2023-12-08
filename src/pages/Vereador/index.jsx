import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Container } from "./style";


import TopPages from "../../components/TopPages";
import { vereadoresList } from "../../data/InfoVereadores";

export default function Vereador() {

    const {id} = useParams();
    const [vereador, setVereador] = useState();

    useLayoutEffect(() => {
        const [vereadorSelecionado] = vereadoresList.filter((vereador)=> {
            
            return vereador.id == id;
        })
        
        setVereador(vereadorSelecionado.nome)
        
    }, [])

    return (
        <Container>
            <TopPages title={vereador} />

        </Container>

    )
}