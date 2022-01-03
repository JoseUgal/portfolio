import styled from "styled-components";

// ** Breakpoints
import bp from "../../constants/breakpoints"


export const Container = styled.div`
    /* border: 1px solid red; */
    
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    height: max-content;

    position: relative;

    padding: 20px 0;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-inline: 3rem;
    gap: 20px;

    @media ${bp.mobileS} {
        width: 100%;
    }

    @media ${bp.laptop} {
        width: 40%;
    }

`


export const Logos = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-wrap: wrap;
    gap: 20px;

    min-width: 300px;

    padding: 20px 3rem;

    justify-content: flex-start;
    align-items: center;
`

export const Title = styled.h2`
    color: var(--fontColor);
    
    font-size: 1.2rem;
    font-weight: 500;
`

export const Description = styled.p`
    color: var(--fontColor);
    
    font-size: 0.9rem;
    font-weight: 300;
`

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;

    border-radius: 6px;

    background-color: var(--bgAlt);
    position: relative;

    box-shadow: rgba(0,0,0,0.05) 0 0 12px 3px;

    > div {
        position: absolute;
        top: 28px;
        left: 28px;
        bottom: 28px;
        right: 28px;
    }
`

