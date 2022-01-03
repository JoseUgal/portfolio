import styled from "styled-components";

// ** Breakpoints
import bp from "../../constants/breakpoints"


export const Container = styled.div`
    display: flex;
    
    /* border: 1px solid red; */
    background-color: var(--bg);

    justify-content: space-between;

    max-width: 100%;

    @media ${bp.mobileS} {
        height: 40vh;
    }

    @media ${bp.tablet} {
        height: 80vh;
    }

    @media ${bp.laptop} {
        height: 100vh;
    }

    > :first-child {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-inline-start: 3rem;
        gap: 6px;

        margin-top: -10vh;
    }
`

export const Image = styled.div`
    width: max-content;
    height: 100%;
`

export const ContactButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    min-width: 120px;
    cursor: pointer;

    padding: 8px 5px;
    border-radius: 6px;

    background-color: var(--primary);
    color: var(--fontColor);
    font-weight: 300;
    font-size: 0.9rem;

    gap: 2px;

    > svg {
        width: 18px;
        height: 18px;
    }

`