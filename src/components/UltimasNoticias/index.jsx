import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Title, Notices, Notice, Card, Text } from "./style";

export default function UltimasNoticias() {
  const [feedList, setFeedList] = useState([]);
  const [ultimasNoticias, setUltimasNoticias] = useState([]);

  async function getInstaFeed() {
    const token =
      "IGQWRQYzBwdVFzNGJZAMXhtTjFoTDJoMTY3TUtZASktvYzhSTldmRk9GTXA3VWtiS0hvN2dyQXdrRHNXRWJrbzhQbVVTM282WGhHVzIzemxzVVRiOXpiMTlOaGlmRDBzZATVZAZAHhyZAHJpcEJBd2xsVjRGVHExbEptVkkZD";
    const fields = "media_url,media_type,permalink,caption"; // Adicionando 'caption' para a descrição
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

    try {
      const { data } = await axios.get(url);
      setFeedList(data.data);
    } catch (error) {
      console.error("Erro ao obter o feed do Instagram:", error);
    }
  }

  function pegarPrimeirosCincoElementos(array) {
    // Verificar se o array tem pelo menos 5 elementos
    if (array.length < 5) {
      console.log("O array tem menos de 5 elementos.");
      return;
    }

    // Criar um novo array para armazenar os primeiros 5 elementos
    var primeirosCinco = [];

    // Copiar os primeiros 5 elementos do array original para o novo array
    for (var i = 0; i < 5; i++) {
      primeirosCinco.push(array[i]);
    }

    setUltimasNoticias(primeirosCinco);
  }

  useEffect(() => {
    getInstaFeed();
  }, []);

  useEffect(() => {
    pegarPrimeirosCincoElementos(feedList);
  }, [feedList]);
  return (
    <Container>
      <Title>ÚLTIMAS NOTÍCIAS</Title>
      <Notices>
        {ultimasNoticias.map((item) => {
          if (item.media_type === "IMAGE" && item.caption) {
            return (
              <Card key={item.permalink}>
                <Notice>
                  <img src={item.media_url} />
                  <Text>{item.caption}</Text>
                </Notice>
              </Card>
            );
          }
        })}
      </Notices>
    </Container>
  );
}
