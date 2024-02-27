import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 160px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
`;

export const Header = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  .date {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: bold;
  }

  .number {
    background-color: var(--cor-secundaria);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    padding: 4px;
    border-radius: 8px;
  }
`;

export const Assunto = styled.div`
  padding: 4px 6px;
  height: 60%;
  width: 90%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* Oculta a barra de rolagem */
  }

  span {
    font-size: 12px;
  }
`;
