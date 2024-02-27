import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .swiper-slide {
    display: grid;
    place-items: center; /* Centraliza horizontal e verticalmente */
    margin: auto;
    background-color: var(--cor-neutra-light);
    height: 250px;

    margin-bottom: 40px;
  }

  .swiper-button-next {
    color: var(--cor-primaria);
  }

  .swiper-button-prev {
    color: var(--cor-primaria);
  }

  .swiper-pagination-bullet {
    background-color: var(--cor-primaria);
    margin-top: 10px;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--cor-primaria);
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 32px;
  align-items: center;
  justify-content: space-between;

  a {
    height: 100%;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    color: #a6a6a6;

    &:hover {
      color: var(--cor-secundaria);
    }

    span {
      font-size: 16px;
      font-weight: bold;

      &:hover {
        color: var(--cor-secundaria);
      }
    }
  }
`;

export const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
  display: block;
`;
