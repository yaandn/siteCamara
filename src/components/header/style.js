import styled from "styled-components";

export const TopLine = styled.div`
  width: 100%;
  height: 4px;
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
  box-shadow: 0px 7px 5px -4px rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Navigation = styled.nav`
  width: 60%;
  height: 60%;
  display: flex;
  align-items:center;
  flex-direction: row;
  justify-content: center;
  gap: 40px;;

  img {
    width: 100px;
    margin-right: 40px;
  }
`;

export const Button = styled.button`
  background-color: var(cor-primaria);
  padding: 8px 12px;
  width: 130px;
  cursor: pointer;
  border: 0.5px solid lightgrey;
  border-bottom: 4px solid var(--cor-primaria);

  &:hover {
    background-color: var(--cor-primaria-light);
  }

  
  span {
    text-align: center;
    font-size: 16px;
  }
`;