import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 40px;
  min-height: 80vh;

  @media (max-width: 450px) {
    width: 85%;
    margin-top: 24px;
  }
`;

export const List = styled.ul`
  list-style: circle;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;

  @media (max-width: 450px) {
    width: 100%;
    margin-top: 24px;
    list-style: none;
  }
`;

export const Item = styled.li`
  a {
    text-decoration: none;
  }

  .item-title {
    font-weight: bold;
    font-size: 20px;
    color: var(--cor-primaria);
    cursor: pointer;

    @media (max-width: 450px) {
      font-size: 16px;
    }
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.span`
  font-size: 40px;

  @media (max-width: 450px) {
    font-size: 32px;
  }
`;
