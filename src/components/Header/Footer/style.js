import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--cor-neutra-light);
  display: flex;
  align-items: center;
  justify-content: center;
  

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    
    

    a {
      text-decoration: none;
      color: #000;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 18px;

      &:hover {
        background-color: var(--cor-neutra-dark);
      }

    }

    
  }
`;