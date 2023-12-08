import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

export const BoxContainer = styled.div`
    width: 60%;
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

export const Card = styled.div`
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

export const SearchContainer = styled.div`
    height: 100px;
    width: 60%;
    margin-top: 48px;
    margin-bottom: 48px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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