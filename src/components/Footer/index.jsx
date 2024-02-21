import { Container, Content } from "./styles";
import { FaPhoneAlt, FaClock, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <span>&#169; SITE DA CAMÂRA MUNICIPAL DE ARAGOIÂNIA</span>
          <span>
            <FaLocationDot />
            AV. ALFREDO NASSER, 544 - CENTRO, ARAGOIÂNIA - GO, 75360-000
          </span>
          <span>
            <FaClock />
            HORÁRIO DE FUNCIONAMENTO: SEGUNDA A SEXTA - 08:00 AS 12:00 - 14:00
            AS 17:00
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
