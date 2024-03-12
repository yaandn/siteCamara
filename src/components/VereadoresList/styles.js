import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const BoxContainer = styled.div`
  min-width: 80%;
  display: flex;
  align-items: row;

  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const SearchContainer = styled.div`
  width: 70%;
  margin-top: 48px;
  margin-bottom: 48px;

  display: flex;
  flex-direction: column;

  gap: 24px;

  @media (max-width: 450px) {
    margin-top: 24px;
    margin-bottom: 32px;
  }

  span {
    font-size: 30px;

    @media (max-width: 450px) {
      font-size: 24px;
    }
  }

  .input-container {
    display: flex;
    align-items: center;
  }

  input {
    width: 30%;
    padding: 16px;
    height: 48px;
    background-color: var(--cor-neutra-light);
    border: 1px solid lightgray;
    border-right: none;
    font-size: 16px;

    @media (max-width: 450px) {
      width: 100%;
    }
  }

  input:focus {
    outline: none;
  }

  .icon {
    background-color: var(--cor-primaria-light);
    padding: 16px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgray;
    cursor: pointer;
  }

  @media (max-width: 450px) {
    width: 80%;
  }
`;
