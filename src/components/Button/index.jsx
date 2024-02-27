import { ButtonAccess } from "./style";
import { GrDocumentDownload } from "react-icons/gr";

export default function Button({ title, link }) {
  return (
    <ButtonAccess href={link} target="_black">
      <GrDocumentDownload size={32} />
      {title}
    </ButtonAccess>
  );
}
