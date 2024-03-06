import styled from "styled-components";

export const ButtonAccess = styled.a`
  width: 50%;
  height: 100%;
  background-color: var(--cor-primaria);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  gap: 16px;
  padding: 12px 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: var(--cor-primaria-light);
    color: var(--cor-primaria);
    border: 3px solid var(--cor-primaria);
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
