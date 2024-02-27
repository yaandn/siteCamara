import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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

export const Content = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;
