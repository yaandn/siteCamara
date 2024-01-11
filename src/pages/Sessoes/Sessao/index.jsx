import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { sessionList } from '../../../data/InfoSessoes';
import TopPages from '../../../components/TopPages';
import { Container, BoxSession, InfoSession, MattersSession, MattersList, Title, LiveSession } from './styles.js'

export default function Sessao () {
    const {id} = useParams();
    const [sessao, setSessao] = useState({});
    const [assuntos, setAssuntos] = useState([]);

    useEffect(() => {
        const sessaoFiltrada = sessionList.find((sessao) => sessao.id === id);
        setSessao(sessaoFiltrada); 
        setAssuntos(sessaoFiltrada.assuntos);
    }, []) 

    
    return (
        <Container>
             <TopPages title={`SESSÃO ORDINÁRIA ${id}`}/>
             <BoxSession>
                <InfoSession>
                    <span>Data: {sessao.data}</span>
                    <span>Número da Sessão: {id}</span>
                </InfoSession>

                <MattersSession>
                    <Title>Assuntos da sessão</Title>
                    <MattersList>
                       
                            {assuntos.map((assunto)=> {
                            return (
                                <li>
                                     <span>{assunto}</span>
                                </li>
                               
                            );
                        })} 
                     
                    </MattersList>
                </MattersSession>
                <LiveSession>
                    <Title>Live da Sessão</Title>
                    <iframe src={sessao.url_live} width="1120" height="952" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

                    
                 
                    
                </LiveSession>
             </BoxSession>
        </Container>
       
        
        
    );
}