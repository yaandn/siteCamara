import styled from "styled-components";

export const BoxHeader = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 8px;

  .title {
    font-size: 32px;

    @media (max-width: 450px) {
      font-size: 24px;
    }
  }

  @media (max-width: 450px) {
    width: 100%;
    padding-left: 16px;
    gap: 4px;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--cor-neutra);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 450px) {
    height: auto;
    padding: 8px;
  }
`;
