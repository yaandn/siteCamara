import { useEffect, useState } from "react";
import NotFound from "../NotFound";
import Card from "../Card";

import { Container, SearchContainer, BoxContainer } from "./styles";
import  {vereadoresList}  from "../../data/InfoVereadores";
import { FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";


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
                        <Link to= {`/vereadores/${vereador.id}`}  key={index}>
                            <Card 
                                foto={vereador.foto}
                                partido={vereador.partido}
                                nome={vereador.nome}
                            />
                           
                        </Link>
                    )
                }): <NotFound text="Nenhum vereador encontrado"/>}
            </BoxContainer>
        </Container>
    );
}