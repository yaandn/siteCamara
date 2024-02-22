import { ButtonAccess } from "./style";
import { GrDocumentDownload } from "react-icons/gr";

export default function Button({ title, link }) {
  return (
    <ButtonAccess href={link}>
      <GrDocumentDownload size={32} />
      {title}
    </ButtonAccess>
  );
}
