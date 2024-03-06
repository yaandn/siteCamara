import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: auto;
`;

export const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;

  img {
    width: 100%;
    height: 500px;

    @media (max-width: 450px) {
      width: 100%;
      height: 200px;
    }
  }

  @media (max-width: 450px) {
    width: 85%;
    margin-top: 24px;
  }
`;

export const Title = styled.span`
  font-size: 40px;
  margin-bottom: 40px;
  display: block;

  @media (max-width: 450px) {
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

export const Text = styled.span`
  font-size: 22px;
  display: flex;
  text-align: justify;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 450px) {
    font-size: 18px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;
