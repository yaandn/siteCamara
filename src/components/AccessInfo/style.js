import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    height: 80vh;
    overflow: auto;
    background-color: var(--cor-neutra-light);
    position: absolute;
    z-index: 99;
    top: 104px;  
    border: 0.5px solid lightgrey ;
    box-shadow: 1px 51px 121px 17px rgba(0,0,0,0.24);
    border-radius: 4px;
    
    display: ${({isopen})=> isopen ? 'flex' : 'none' };
    flex-direction: row;
    flex-wrap: wrap;
    
    
    
`;

export const BoxInfo = styled.div`
    width: 300px;
    height: fit-content;
    padding: 14px 18px;
   
    
`;

export const Title = styled.span`
    font-size: 24px;
   
`;

export const BoxLinks = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    margin-top: 8px;

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            text-decoration-color: gray;
        }
    }
`;

export const TextLinks = styled.span`
    color: gray;
    font-size: 18px;
`




