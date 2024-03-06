import { Container, Content } from "./styles";
import {
  FaPhoneAlt,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaToolbox,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { GoLaw } from "react-icons/go";

export default function Footer() {
  return (
    <Container>
      <Content>
        <div className="informacoes">
          <span>&#169; SITE DA CAMÂRA MUNICIPAL DE ARAGOIÂNIA</span>
          <span>
            <span className="location">
              <FaLocationDot size={25} />
              CENTRO ADMINISTRATIVO MUNICIPAL MANOEL SILVÉRIO RIOS - CÂMARA
              MUNICIPAL DE ARAGOIÂNIA - PRAÇA SANTA LUZIA, N 37, CENTRO TÉRREO
              CEP : 75.330-000
            </span>
          </span>
          <span>
            <FaClock size={25} />
            HORÁRIO DE FUNCIONAMENTO: SEGUNDA A SEXTA - 08:00 AS 11:00 - 13:00
            AS 17:00
          </span>
          <span>
            <FaToolbox />
            SESSÕES ORDINÁRIAS: TODAS QUARTAS-FEIRAS AS 09:30h
          </span>
          <span>
            <FaPhoneAlt /> TELEFONE: (62) 3550-1113
          </span>

          <span>
            <MdMail />
            EMAIL: aragoianialegislativo@gmail.com
          </span>
        </div>
        <div>
          <span>ACESSE NOSSAS REDES SOCIAIS:</span>
          <div className="redes-sociais">
            <span className="icons">
              <a
                href="https://www.instagram.com/aragoianialegislativo/"
                target="_blank"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.facebook.com/aragoianialegislativo"
                target="_blank"
              >
                <FaFacebook size={28} />
              </a>
            </span>
          </div>
        </div>
      </Content>
    </Container>
  );
}
