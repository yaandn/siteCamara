import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 300px;
    border: 2px solid var(--cor-primaria);
    border-bottom: 8px solid var(--cor-primaria);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--cor-primaria);
    transition: width 0.1s ease-in;
    transition: height 0.1s ease-in;

    
    
    

    .foto-vereador {
        width: 100%;
        height: 100%;
        
    }

    &:hover {
        width: 310px;
        height: 310px;
        cursor: pointer;

        footer {
            width: 310px;
            height: 66px;
        }
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
    transition: width 0.1s ease-in;
    transition: height 0.1s ease-in;


    

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
