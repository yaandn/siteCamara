import axios from "axios";
import { useEffect, useState } from "react";

import {
  Container,
  Notice,
  Image,
  Text,
  Card,
  Title,
  Notices,
  Button,
} from "./styles";

import { FaInstagram } from "react-icons/fa";

export default function InstaFeed() {
  const [feedList, setFeedList] = useState([]);

  async function getInstaFeed() {
    const token =
      "IGQWRQYzBwdVFzNGJZAMXhtTjFoTDJoMTY3TUtZASktvYzhSTldmRk9GTXA3VWtiS0hvN2dyQXdrRHNXRWJrbzhQbVVTM282WGhHVzIzemxzVVRiOXpiMTlOaGlmRDBzZATVZAZAHhyZAHJpcEJBd2xsVjRGVHExbEptVkkZD";
    const fields = "media_url,media_type,permalink,caption"; // Adicionando 'caption' para a descrição
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

    try {
      const { data } = await axios.get(url);
      setFeedList(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Erro ao obter o feed do Instagram:", error);
    }
  }

  useEffect(() => {
    getInstaFeed();
  }, []);

  return (
    <Container>
      <Title>Últimas notícias da Câmara municipal de Aragoiânia</Title>

      <Notices>
        {feedList.map((item) => {
          if (item.media_type === "IMAGE" && item.caption) {
            return (
              <Card>
                <Notice>
                  <Image src={item.media_url} />
                  <div className="text-button">
                    <Text>{item.caption}</Text>
                    <Button href={item.permalink}>
                      <FaInstagram size={25} />
                      <span>Acessar a notícia no nosso instagram</span>
                    </Button>
                  </div>
                </Notice>
              </Card>
            );
          }
        })}
      </Notices>
    </Container>
  );
}
