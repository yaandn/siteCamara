import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 250px;
  background-color: var(--cor-primaria);
  bottom: 0;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 70%;
  height: 100%;
  padding: 40px;
  display: flex;

  flex-direction: column;

  span {
    color: white;
    display: block;
    margin-bottom: 16px;
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;
