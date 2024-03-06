import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--cor-primaria);
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;

  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: ${({ isOpen }) => (isOpen ? "fixed" : "none")};
  z-index: 9999;
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: var(--cor-primaria-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  img {
    width: 80px;
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  a {
    text-decoration: none;
    padding: 12px 24px;

    button {
      background-color: transparent;
      border: none;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
    }
  }
`;

export const AreaButtons = styled.div`
  margin-top: 24px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid #fff;
  padding-top: 24px;
  gap: 10px;

  .access-info {
    background-color: var(--cor-secundaria);
  }
`;

export const Buttons = styled.a`
  width: 100%;
  height: 60px;
  background-color: red;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: #fff;
  color: var(--cor-primaria);
  text-decoration: none;

  span {
    font-size: 16px;
    font-weight: 600;
  }
  img {
    width: 100px;
    border-radius: 8px;
  }
`;
