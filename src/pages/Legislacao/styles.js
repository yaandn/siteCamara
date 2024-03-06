import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;

  @media (max-width: 450px) {
    width: 85%;
    margin-top: 24px;
  }
`;

export const Title = styled.span`
  font-size: 40px;
  display: block;
  margin-bottom: 32px;

  @media (max-width: 450px) {
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

export const Text = styled.span`
  font-size: 22px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  text-align: justify;

  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

export const DownloadArea = styled.div`
  width: 60%;
  height: 80px;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 450px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;
