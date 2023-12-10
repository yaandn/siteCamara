
import { Container, BoxInfo, Title, BoxLinks, TextLinks } from './style'

import { infoAccess } from '../../data/InfoTransparencia'

export default function AccessInfo({isOpen}) {
  
    return (
        <Container
            isopen={isOpen}
            onMouseOut={() => isOpen = false}

        >
            {infoAccess.map((campo) => {
                return(
                    <BoxInfo>
                        <Title>{campo.titulo}</Title>
                        <BoxLinks>
                           {campo.topicos.map((topico) => {
                            return (
                                <a href={topico.link}><TextLinks>{topico.tituloTopico}</TextLinks></a>  
                            );
                        })} 
                        </BoxLinks>
                        
                    </BoxInfo>
                )
            })}
        </Container>
    )
}