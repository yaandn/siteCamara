import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const BoxSession = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 450px) {
    width: 80%;
  }
`;

export const InfoSession = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 40px;

  @media (max-width: 450px) {
    margin-top: 24px;
  }

  span {
    color: gray;
    font-size: 18px;
  }
`;

export const MattersSession = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const Title = styled.span`
  font-size: 48px;
  margin-bottom: 16px;

  @media (max-width: 450px) {
    font-size: 32px;
  }
`;

export const MattersList = styled.ul`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;

  .text_matters {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 400;

    @media (max-width: 450px) {
      font-size: 16px;
    }
  }
`;

export const LiveSession = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const DownloadArea = styled.div`
  width: 60%;
  height: 80px;
  margin-top: 40px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 450px) {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 24px;
  }
`;
