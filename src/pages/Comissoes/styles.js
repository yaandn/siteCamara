import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;

  gap: 16px;
  margin-bottom: 60px;

  .title {
    display: block;
    font-size: 32px;

    @media (max-width: 500px) {
      font-size: 28px;
    }
  }

  .icon {
    color: var(--cor-primaria);
    font-size: 32px;

    @media (max-width: 500px) {
      font-size: 28px;
    }
  }
`;

export const Content = styled.div`
  width: 70%;

  display: flex;
  margin-top: 40px;

  flex-direction: column;

  .box-container {
    width: 100%;

    height: fit-content;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    @media (max-width: 500px) {
      flex-direction: column;
      gap: 60px;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cargo {
    font-size: 24px;
    margin-top: 40px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--cor-primaria);
    color: var(--cor-primaria);

    @media (max-width: 500px) {
      margin-top: 16px;
      font-size: 22px;
    }
  }
`;
