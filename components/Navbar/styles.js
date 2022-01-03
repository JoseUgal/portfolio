import styled from "styled-components";

import bp from "../../constants/breakpoints"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: var(--navbarSize);

    padding: 0 3rem;

    border-bottom: 1px solid var(--shadow);

    background-color: var(--navbarBg);
    /* border: 1px solid red; */

    & div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: max-content;
    }
`

export const Title = styled.a`
    color: var(--fontColor);
    
    font-size: 1.2rem;
    font-weight: bold;
`

export const Option = styled.a`
    color: var(--fontColor);
    background-color: transparent;
    
    &:not(:last-child){
        margin-right: 1rem;
    }
    
    &:last-child {
        margin-left: 1rem;
    }

    cursor: pointer;

    font-size: 0.8rem;

    @media ${bp.tablet} {
        font-size: 1rem;
    }
`