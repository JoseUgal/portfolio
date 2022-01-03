import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px;

    width: 100%;
    height: max-content;
    

    border-radius: 6px;

    background-color: var(--bgAlt);
    position: relative;

    box-shadow: rgba(0,0,0,0.05) 0 0 12px 3px;
`

export const Title = styled.h3`
    font-size: 0.9rem;

    font-weight: 500;
`


export const Description = styled.p`
    font-size: 0.8rem;
    font-weight: 600;

    margin-top: 8px;
`

export const Links = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-top: 10px;
    gap: 8px;
    width: 100%;
`

export const LinkButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    height: 30px;
    min-width: 120px;
    padding: 5px 2px;
    
    font-size: 0.8rem;
    font-weight: 400;
    
    color: var(--fontColor);
    background-color: var(--primary);
    
    border: 2px solid var(--primary);
    
    border-radius: 6px;
    
    cursor: pointer;
    transition: 0.2s linear 0s;

    &:hover {
        background-color: transparent;
    }

    > svg {
        fill: var(--fontColor);
        width: 16px;
        height: 16px;
    }
`