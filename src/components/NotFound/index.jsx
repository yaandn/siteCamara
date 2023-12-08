import { Container } from "./style"
import { TbAlertTriangleFilled } from "react-icons/tb";

export default function NotFound(props) {
    return (
     <Container>
        <TbAlertTriangleFilled
            color='a7a7a7'
            size={64}
        />
        <span>{props.text}</span>
     </Container>   
    )
}