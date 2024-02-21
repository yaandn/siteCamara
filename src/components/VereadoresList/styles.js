import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: row;

  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
  margin-bottom: 100px;

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

  span {
    font-size: 30px;
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
`;
