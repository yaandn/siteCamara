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
  margin-top: 48px;
  gap: 24px;
`;

export const InfoContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;

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
