import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const BoxContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: row;
    margin-top: 100px;
    align-items: center;
    gap: 80px;
    flex-wrap: wrap;
    margin-bottom: 100px;
`;

export const Card = styled.div`
    width: 300px;
    height: 300px;
    border: 2px solid var(--cor-primaria);
    border-bottom: 8px solid var(--cor-primaria);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--cor-primaria);
    
    
    

    .foto-vereador {
        width: 100%;
        height: 100%;
        
    }
`;

export const Footer = styled.footer`
    display: flex;
    gap: 16px;
    align-items: center;
    width: 300px;
    height: 56px;
    background-color: #fff;
    margin-top: 4px;
    
    padding: 16px;
    border: 2px solid var(--cor-primaria);
    border-top: 4px solid var(--cor-secundaria) ;
    

    .partido {
        font-size: 14px;
        height: 100%;
        border-right: 2px solid var(--cor-primaria);
        
        span {
            text-align: center;
            margin-right: 12px;
        }
    }

    
    
`;