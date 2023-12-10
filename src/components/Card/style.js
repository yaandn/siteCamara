import styled from "styled-components";


export const Container = styled.div`
    width: ${({type}) => type === 'nano' ? '200px' : '300px'};
    height: ${({type}) => type === 'nano' ? 'fit-content' : '350px'};
   
  
    transition: width 0.1s ease-in;
    transition: height 0.1s ease-in;
    

    &:hover {
        width: ${({type}) => type === 'nano' ? '200px' : '310px'};
        height: ${({type}) => type === 'nano' ? 'fit-content' : '360px'};
        cursor: pointer;

        
    }
`;

export const BoxImg = styled.div`
    width: 100%;
    background-color: green;
   
    border: 2px solid var(--cor-primaria);
    border-bottom: 8px solid var(--cor-primaria);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--cor-primaria);
   
    

    
    
    

    .foto-vereador {
        width: 100%;
        height: ${({type}) => type === 'nano' ? '200px' : '300px'};;
        
        
    }

   
`;

export const Footer = styled.footer`
    display: flex;
    gap: 16px;
    align-items: center;
    width: 100%;
    height: 25%;
    background-color: #fff;
    
    padding: 16px;
    border: 2px solid var(--cor-primaria);
    border-top: 4px solid var(--cor-secundaria) ;
    

    .partido {
        font-size: 14px;
        width: 70px;
        
        
        height: 100%;
        border-right: 2px solid var(--cor-primaria);
        display: flex;
        align-items: center;
        justify-content: center;
        
        span {
            text-align: center;
            margin-right: 12px;
            font-weight: bold;
        }

       img {
            height: 50px;
            width: 60px;
            padding: 8px;
            margin-right: 8px;   
        }

        



        
    }

    .box-name {

    span {
        font-size: ${({type}) => type === 'nano' ? '16px' : '20px'};
        font-weight: ${({type}) => type === 'nano' ? 'normal' : 'bold'};
    }

}
`;
