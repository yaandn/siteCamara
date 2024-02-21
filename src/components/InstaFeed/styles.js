import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 40px;
  min-height: 100vh;
`;

export const Title = styled.span`
  font-size: 48px;
  margin-top: 40px;
  margin-bottom: 50px;
  display: block;
`;

export const Notices = styled.div`
  display: flex;
  gap: 42px;
  width: 100%;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 40px;
`;

export const Card = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  justify-content: center;
  border: 1px solid var(--cor-neutra-dark);
  border-radius: 8px;
  background-color: var(--cor-neutra-light);

  .text-button {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
export const Notice = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`;

export const Image = styled.img`
  width: 400px;
  height: 90%;
`;

export const Text = styled.span`
  font-size: 18px;
  line-height: 1.5;
`;

export const Button = styled.a`
  width: 40%;
  padding: 12px 16px;
  cursor: pointer;
  background-color: var(--cor-primaria);
  color: aliceblue;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s; /* Adicionando transição */
  text-decoration: none;

  &:hover {
    background-color: var(--cor-primaria-light);
    border: 2px solid var(--cor-primaria);
    color: var(--cor-primaria);
  }
`;
