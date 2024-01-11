import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Container, BoxContainer, InfoContainer, BioContainer } from "./style";


import TopPages from "../../../components/TopPages";
import Card from '../../../components/Card'
import { vereadoresList } from "../../../data/InfoVereadores";

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

                    <div className="infos">
                        <div>
                            <span className="item-title">Naturalidade:</span>
                            <span className="item">{vereador.naturalidade}</span>
                        </div>
                        <div>
                            <span className="item-title">Base eleitoral:</span>
                            <span className="item">{vereador.baseEleitoral}</span>
                        </div>
                        <div>
                            <span className="item-title">Quantidade de votos:</span>
                            <span className="item">{`${vereador.votos} votos em 2020`}</span>
                        </div>
                    </div>

                    

                    <span className="subtitle">FALE COM O SEU VEREADOR</span>
                    <div className="infos">
                        <div>
                            <span className="item-title">Telefone:</span>
                            <span className="item">{vereador.telefone}</span>
                        </div>
                        <div>
                            <span className="item-title">Email:</span>
                            <span className="item">{vereador.email}</span>
                        </div>
                        <div>
                            <span className="item-title">Endereço para correspondência:</span>
                            <span className="item">Av. Alfredo Nasser, 544 - Centro, Aragoiânia - GO, 75360-000</span>
                        </div>
                    </div>




                </InfoContainer>
                <BioContainer>
                    <span>Biografia</span>
                    <span className="bio">{vereador.biografia}</span>

                </BioContainer>
            </BoxContainer>
        

        </Container>

    )
}