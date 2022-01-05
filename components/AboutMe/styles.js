import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(40vh, max-content);

    grid-template-areas: "IMG TXT";
    
    padding: 40px 0;


    background-color: var(--bgAlt);

    justify-content: space-between;


    > div:nth-child(1) {
        grid-area: IMG;
        margin: 10px;
        position: relative;
    }

    > div:nth-child(2) {
        grid-area: TXT;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        gap: 8px;
        padding: 20px;
    }

`

export const Image = styled.div`
    
`

export const Title = styled.h2`
    font-weight: 400;
    font-size: 1.3rem;
`


export const Description = styled.p`
    font-size: 0.9rem;
    font-weight: 300;
`

export const ContactButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 36px;
    font-weight: 400;

    border-radius: 6px;
    min-width: 120px;
    padding: 2px 5px;

    background-color: var(--bg);
    border: 1px solid var(--fontColor);

    cursor: pointer;

    margin-top: 10px;

`