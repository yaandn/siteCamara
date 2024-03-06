import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: var(--cor-primaria);
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
`;

export const Content = styled.div`
  width: 75%;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 450px) {
    width: 90%;
    flex-direction: column;
  }

  .informacoes {
    width: 65%;

    @media (max-width: 450px) {
      width: 100%;
      margin-bottom: 16px;
    }
  }

  .location {
    display: flex;
    flex-direction: row;
    gap: 8px;
    font-size: 14px;

    @media (max-width: 450px) {
      font-size: 14px;
    }
  }

  span {
    color: white;
    display: block;
    margin-bottom: 16px;
    display: flex;
    gap: 8px;
    align-items: center;

    @media (max-width: 450px) {
      font-size: 14px;
    }
  }

  .redes-sociais {
    width: auto;

    .icons {
      gap: 16px;

      a {
        color: whitesmoke;
        transition: all 0.5s;

        &:hover {
          color: var(--cor-secundaria);
        }
      }
    }
  }
`;
