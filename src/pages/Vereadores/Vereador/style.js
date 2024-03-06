import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BoxContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 24px;

  @media (max-width: 450px) {
    flex-direction: column;
    width: 80%;
    margin-top: 24px;
  }
`;

export const InfoContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;

  @media (max-width: 450px) {
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
  }

  .subtitle {
    display: block;
    font-size: 22px;
    margin-top: 16px;
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;

    @media (max-width: 450px) {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 24px;
    }

    .item-title {
      display: block;
      font-weight: bold;
      margin-bottom: 4px;
    }
  }
`;

export const BioContainer = styled.div`
  width: 80%;
  height: 1000px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .bio {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;
  }
`;
