import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const AccessTitle = styled.span`
  display: block;
  font-size: 32px;
  color: black;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const Content = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;
  justify-content: center;
  align-items: center;

  img {
    width: 1000px;
    height: 400px;
    border-radius: 8px;
    margin-bottom: 40px;
  }
`;

export const Access = styled.section`
  width: 100%;
  margin-bottom: 40px;
`;

export const AccessContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

export const CardAccess = styled.a`
  width: 24%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  gap: 16px;
  padding: 20px;
  cursor: pointer;
  text-decoration: none;
  background-color: var(--cor-primaria);
  color: #fff;
  border: 3px solid var(--cor-primaria);

  &:hover {
    color: var(--cor-secundaria);
  }
`;
