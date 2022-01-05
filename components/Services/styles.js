import styled from "styled-components";

// ** Breakpoints
import bp from "../../constants/breakpoints"


export const Container = styled.div`
    /* border: 1px solid red; */
    
    display: flex;
    flex-direction: column;

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
    gap: 10px;

    @media ${bp.mobileS} {
        width: 100%;
    }

    @media ${bp.laptop} {
        width: 40%;
    }

`


export const Logos = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media ${bp.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${bp.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${bp.laptopL} {
        grid-template-columns: repeat(4, 1fr);
    }

    gap: 20px;
    padding: 20px 3rem;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    gap: 6px;
    padding: 20px;
    
    position: relative;
    
    width: 100%;
    height: 180px;

    border-radius: 6px;

    background-color: var(--bgAlt);

    box-shadow: rgba(0,0,0,0.05) 0 0 12px 3px;
`

export const IconLogo = styled.div`
    position: relative;
    width: 46px;
    height: 46px;
`

