import { useEffect, useState } from "react";
import NotFound from "../NotFound";

import { Container, SearchContainer, BoxContainer,  Card, Footer } from "./styles";
import  {vereadoresList}  from "../../data/InfoVereadores";
import { FaSearch } from "react-icons/fa";


export default function VereadorsList() {
    const [filtro, setFiltro] = useState('');
    const [vereadores, setVereadores] = useState(vereadoresList);
    

    const handleFiltroChange = (event) => {
        setFiltro(event.target.value)
        
       
    }

    useEffect(() => {
        let listaFiltrada = vereadoresList.filter((vereador) => vereador.nome.toLowerCase().includes(filtro.toLowerCase()))
        setVereadores(listaFiltrada);
    }, [filtro])

    

    return (
        <Container>
            <SearchContainer>
                <span>Pesquise por um vereador:</span>
                <div className="input-container">
                    <input 
                        type="text"
                        placeholder="Nome de um vereador"
                        value={filtro}
                        onChange={handleFiltroChange}
                    />
                    <div className="icon">
                        <FaSearch />
                    </div>
                </div>
               

            </SearchContainer>
            <BoxContainer>
                
               
                { vereadores.length > 0 ? 
                
                vereadores.map((vereador, index)=> {
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
                }): <NotFound text="Nenhum vereador encontrado"/>}
            </BoxContainer>
        </Container>
    );
}