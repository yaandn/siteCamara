import { Link } from "react-router-dom";

import { useLayoutEffect, useState } from "react";
import { Container, Title, Header } from "./style";
import { CgMenuGridR } from "react-icons/cg";
import SessionCard from "../SessionCard";
import { sessionList } from "../../data/InfoSessoes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SlideSession() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const width = window.innerWidth;
    setWidth(width);
  }, []);
  return (
    <Container>
      <Header>
        <Title>SESSÕES ORDINÁRIAS</Title>
        <Link to="/sessoes">
          <CgMenuGridR />
          <span>VER TODAS</span>
        </Link>
      </Header>
      <Swiper
        slidesPerView={width <= 500 ? 1 : 3}
        pagination={{ clickable: true }}
      >
        {sessionList.map((item) => {
          return (
            <SwiperSlide>
              <SessionCard
                data={item.data}
                assunto={item.assuntos[0]}
                numero={item.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
