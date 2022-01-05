import styled from "styled-components";

// ** Viewports
import bp from "../../constants/breakpoints"


export const Container = styled.div`
    display: flex;
    
    &.hidden {
        display: none;
    }


    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 40px;
    width: 100%;
    height: 100vh;

    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: var(--bg);

    z-index: 1;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;
`

export const Title = styled.a`
    color: var(--fontColor);
    
    font-size: 1.6rem;
    font-weight: bold;
`

export const Option = styled.a`
    color: var(--fontColor);
    background-color: transparent;

    margin-right: 1rem;
    cursor: pointer;

    font-size: 1.2rem;
    font-weight: 300;

`

export const ChooseLanguage = styled.select`
    background: transparent;
    background-color: transparent;

    color: var(--fontColor);
`