import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  border-top-right-radius: 8%;
  border-top-left-radius: 8%;

  flex-direction: column;
  background-color: var(--cor-neutra-light);

  .title {
    display: block;
    font-size: 48px;
    margin-bottom: 80px;
    margin-top: 40px;
  }
`;

export const Content = styled.div`
  min-width: 75%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 80px;

  justify-content: center;
  gap: 32px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .cargo {
      font-size: 24px;
      margin-top: 40px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--cor-primaria);
      color: var(--cor-primaria);
    }
  }
`;
