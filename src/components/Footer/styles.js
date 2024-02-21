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
  width: 70%;

  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .informacoes {
    width: 65%;
  }

  .location {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  span {
    color: white;
    display: block;
    margin-bottom: 16px;
    display: flex;
    gap: 8px;
    align-items: center;
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
