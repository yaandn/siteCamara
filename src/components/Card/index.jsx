import {Container, BoxImg, Footer} from './style'

export default function Card ({foto, partido, nome, nano}) {
    return (
        <Container type={nano}>
            <BoxImg type={nano}>
                <img src={foto} alt='foto-vereador' className="foto-vereador" />
              
            </BoxImg>
            <Footer type ={nano}>
                <div className="partido">
                   <img src={partido} alt="partido"/>
                </div>
                <div className="box-name">
                    <span>{nome}</span>
                </div>
            </Footer>
        </Container>
        
        
    )
    
}