import styled from "styled-components";

// ** Breakpoints
import bp from "../../constants/breakpoints"


export const Container = styled.div`
    /* border: 1px solid red; */
    
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    width: 100%;
    height: max-content;

    position: relative;

    padding: 20px 3rem;

`

export const Title = styled.h2`
    color: var(--fontColor);
    
    font-size: 1.2rem;
    font-weight: 500;
`

export const Content = styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 1rem;


    @media ${bp.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${bp.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${bp.laptopL} {
        grid-template-columns: repeat(4, 1fr);
    }

`