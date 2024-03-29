import styled from "styled-components";

export const TopLine = styled.div`
  width: 100%;
  height: 8px;
  display: flex;

  .line1 {
    background-color: var(--cor-primaria);
    width: 40%;
    height: 100%;
  }
  .line2 {
    background-color: var(--cor-secundaria);
    width: 30%;
    height: 100%;
  }
  .line3 {
    background-color: var(--cor-terciaria);
    width: 30%;
    height: 100%;
  }
`;

export const Container = styled.header`
  width: 100%;
  height: 130px;
  background-color: #fff;
  box-shadow: 0px 7px 5px -4px rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 450px) {
    flex-direction: row;
    box-shadow: 0px 7px 5px -4px rgba(0, 0, 0, 0.1);
  }
`;

export const Navigation = styled.nav`
  width: 60%;
  height: 60%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 40px;

  a {
    text-decoration: none;
  }

  .access-info {
    background-color: var(--cor-secundaria-light);
    color: var(--cor-primaria);
    font-weight: bold;
    padding: 8px 12px;
    min-width: 160px;
    max-width: 160px;

    border-radius: 8px;

    margin-left: 40px;
    cursor: pointer;
    border: 0.5px solid lightgrey;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    gap: 10px;

    img {
      width: 28%;
    }

    @media (max-width: 450px) {
      display: none;
    }
  }

  .is-active {
    background-color: var(--cor-primaria-light);
    padding: 8px 12px;
    width: ${({ transparencia }) => (transparencia ? "160px" : "130px")};
    border-radius: ${({ transparencia }) => (transparencia ? "8px" : "none")};
    margin-left: ${({ transparencia }) => (transparencia ? "58px" : "0")};
    cursor: pointer;
    border: 0.5px solid lightgrey;
    border-bottom: 4px solid var(--cor-primaria);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media (max-width: 450px) {
      display: none;
    }
  }

  .is-not-active {
    padding: 8px 12px;
    width: ${({ transparencia }) => (transparencia ? "160px" : "130px")};
    border-radius: ${({ transparencia }) => (transparencia ? "8px" : "none")};
    margin-left: ${({ transparencia }) => (transparencia ? "58px" : "0")};
    cursor: pointer;
    border: 0.5px solid lightgrey;
    border-bottom: 4px solid var(--cor-primaria);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media (max-width: 450px) {
      display: none;
    }
  }

  .transparencia {
    background-color: var(--cor-neutra);
    padding: 8px 12px;
    width: 160px;
    border-radius: 8px;
    box-shadow: 6px 26px 89px -22px rgba(120, 119, 120, 1);
    margin-left: 40px;
    cursor: pointer;
    border: 0.5px solid lightgrey;
    border-bottom: 4px solid var(--cor-primaria);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    @media (max-width: 450px) {
      display: none;
    }
  }

  .logo-radar {
    width: 140px;
    cursor: pointer;
    height: 79%;
    padding: 4px;
    border-radius: 8px;
    border: 0.5px solid lightgrey;
    border-bottom: 4px solid var(--cor-primaria);
    box-shadow: 6px 26px 89px -22px rgba(120, 119, 120, 1);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 140px;
      height: 100%;
    }

    @media (max-width: 450px) {
      display: none;
    }
  }

  .logo-camara {
    width: 100px;
    margin-right: 40px;

    @media (max-width: 450px) {
      margin: 0;
      width: 100px;
      margin-right: 30px;
    }
  }

  @media (max-width: 450px) {
    align-items: center;
    justify-content: center;
    gap: 0;
    width: 80%;
    height: 90%;
  }
`;

export const Button = styled.button`
  &:hover {
    background-color: var(--cor-primaria-light);
  }

  span {
    text-align: center;
    font-size: 16px;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;
