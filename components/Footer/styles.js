import styled from "styled-components";

// ** Breakpoints
import bp from "../../constants/breakpoints"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    position: relative;

    gap: 8px;

    background-color: var(--primary);
`

export const IconLink = styled.a`
    width: max-content;
    height: max-content;

    cursor: pointer;


    > svg {
        width: 16px;
        height: 16px;

        @media ${bp.tablet} {
            width: 20px;
            height: 20px;
        }

        fill: var(--fontColor);
    }
`

export const UpButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--bg);

    width: 36px;
    height: 36px;

    border-radius: 6px;

    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    left: auto;
    margin: auto;

    opacity: 0.1;
    transition: opacity 0.3s ease 0s;
    cursor: pointer;

    &:hover {
        opacity: 0.45; 
    }

    > {
        svg {
            width: 16px;
            height: 16px;

            fill: var(--fontColor);
        }
    }

`