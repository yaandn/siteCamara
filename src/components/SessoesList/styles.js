import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 40px;
  min-height: 80vh;
`;

export const List = styled.ul`
  list-style: circle;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
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
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.span`
  font-size: 40px;
`;
