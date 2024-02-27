import {
  Container,
  Content,
  Access,
  AccessContainer,
  CardAccess,
  AccessTitle,
} from "./styles";
import { FaRegMoneyBillAlt, FaUser, FaCalendarDay } from "react-icons/fa";
import { FaHandshakeSimple, FaCalendarDays } from "react-icons/fa6";
import { LiaFileContractSolid } from "react-icons/lia";
import { GrSchedules } from "react-icons/gr";
import { GiThorHammer } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import ImgHome from "../../assets/imagens/edicaohome.png";
import UltimasNoticias from "../../components/UltimasNoticias";
import SlideSession from "../../components/SlideSession";
import Location from "../../components/Location";

export default function Home() {
  return (
    <Container>
      <Content>
        <img src={ImgHome} alt="edicao-home" />
        <Access>
          <AccessTitle>ACESSE JÁ</AccessTitle>
          <AccessContainer>
            <CardAccess
              href="https://camaraaragoiania.megasofttransparencia.com.br/receitas-e-despesas/receita?ano=2024"
              target="_blank"
            >
              <FaRegMoneyBillAlt size={32} />
              <span>Receitas</span>
            </CardAccess>
            <CardAccess
              href="https://camaraaragoiania.megasofttransparencia.com.br/receitas-e-despesas/despesa-sintetica"
              target="_blank"
            >
              <GiReceiveMoney size={32} />
              <span>Despesas</span>
            </CardAccess>
            <CardAccess
              href="https://camaraaragoiania.megasofttransparencia.com.br/contratos-convenios-e-licitacoes/contrato"
              target="_blank"
            >
              <LiaFileContractSolid size={32} />
              <span>Contratos</span>
            </CardAccess>
            <CardAccess
              href="https://camaraaragoiania.megasofttransparencia.com.br/contratos-convenios-e-licitacoes/procedimentos-licitatorios?tipoDeConsultaDeModalidade=1"
              target="_blank"
            >
              <GiThorHammer size={32} />
              <span>Licitações</span>
            </CardAccess>
            <CardAccess
              href="https://camaraaragoiania.megasofttransparencia.com.br/orgaos-e-servidores/servidor?ano=2024&mes=01"
              target="_blank"
            >
              <FaUser size={30} />
              <span>Servidores</span>
            </CardAccess>
            <CardAccess
              href="https://camaraaragoiania.megasofttransparencia.com.br/orgaos-e-servidores/servidor?ano=2024&mes=01"
              target="_blank"
            >
              <FaCalendarDays size={30} />
              <span>Diárias</span>
            </CardAccess>
            <CardAccess
              href="https://camaraaragoiania.megasofttransparencia.com.br/contratos-convenios-e-licitacoes/convenio"
              target="_blank"
            >
              <FaHandshakeSimple size={32} />
              <span>Convênios</span>
            </CardAccess>
            <CardAccess
              href="https://camaraaragoiania.megasofttransparencia.com.br/planejamento-e-politicas-publicas/planos"
              target="_blank"
            >
              <GrSchedules size={30} />
              <span>Planos</span>
            </CardAccess>
          </AccessContainer>
        </Access>
        <UltimasNoticias />
        <SlideSession />
        <Location />
      </Content>
    </Container>
  );
}
