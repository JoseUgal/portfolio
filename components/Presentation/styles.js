import styled from "styled-components";

// ** Breakpoints
import bp from "../../constants/breakpoints"


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 40vh;
    grid-template-areas: "TXT1 IMG1";
    
    /* border: 1px solid red; */
    background-color: var(--bg);

    @media ${bp.tablet} {
        grid-template-rows: 80vh;
    }

    @media ${bp.laptop} {
        grid-template-rows: 100vh;
    }

    > div:nth-child(1) {
        grid-area: TXT1;

        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-inline-start: 3rem;
        gap: 6px;

        margin-top: -10vh;
    }

    > div:nth-child(2) {
        grid-area: IMG1;

        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        
        > span {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    /* > div:first-child {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding-inline-start: 3rem;
        gap: 6px;

        margin-top: -10vh;
    } */
`

export const Image = styled.div`
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