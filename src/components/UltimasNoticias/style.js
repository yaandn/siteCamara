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

      @media (max-width: 450px) {
        font-size: 14px;
      }

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

  @media (max-width: 450px) {
    font-size: 24px;
  }
`;

export const Notices = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 40px;
  justify-content: center;

  @media (max-width: 450px) {
    width: auto;
    overflow: auto;
    flex-wrap: nowrap;
    justify-content: start;
    flex-direction: row;
  }
`;

export const Card = styled.div`
  width: 30%;
  padding: 24px;
  display: flex;
  justify-content: center;
  border: 1px solid var(--cor-neutra-dark);
  border-radius: 8px;
  background-color: var(--cor-neutra-light);

  @media (max-width: 450px) {
    min-width: 300px;
    height: 500px;
  }
`;
export const Notice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 250px;
    height: 250px;

    @media (max-width: 450px) {
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Text = styled.span`
  font-size: 12px;
  line-height: 1.5;
  text-align: justify;
  display: block;
  overflow: auto;
`;
