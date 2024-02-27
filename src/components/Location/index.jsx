import { Container, Title, Header, Content } from "./style";

export default function Location() {
  return (
    <Container>
      <Header>
        <Title>VISITE A CÂMARA MUNICIPAL</Title>
      </Header>
      <Content>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d122152.64936050831!2d-49.53308467400127!3d-16.911954208238026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x935e5377275c8919%3A0x9f6b71b153699ac6!2sAv.%20Alfredo%20Nasser%2C%20544%20-%20Centro%2C%20Aragoi%C3%A2nia%20-%20GO%2C%2075360-000!3m2!1d-16.9119398!2d-49.4507228!5e0!3m2!1spt-BR!2sbr!4v1709061160518!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Content>
    </Container>
  );
}
