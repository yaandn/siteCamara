import { BoxHeader } from "./styles";
import { FaAngleRight } from "react-icons/fa";


export default function TopPages ({title}) {
  return (
    
        <BoxHeader>
          <FaAngleRight
            size={48}
            color="#158146"
          />
          <span className="title">{title}</span>
        </BoxHeader>
      
  );
}