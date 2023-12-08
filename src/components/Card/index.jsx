import {Container, Footer} from './style'

export default function Card ({foto, partido, nome, nano}) {
    return (
        
        <Container type={nano}>
            <img src={foto} alt='foto-vereador' className="foto-vereador" />
            <Footer type ={nano}>
                <div className="partido">
                    <span>{partido}</span>
                </div>
                <div className="box-name">
                    <span>{nome}</span>
                </div>
            </Footer>
        </Container>
    )
    
}