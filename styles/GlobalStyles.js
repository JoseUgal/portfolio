// ** Styled Options
import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--fontColor);
    } 
    html, body, #root {
        height: 100%;
        background-color: var(--bg);
    }
    html {
        scroll-behavior: smooth;
    }
    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        color: var(---fontColor);
        text-decoration: none;
    }
    img {
        pointer-events: none;
    }

    .tooltip {
        position: relative;
        display: inline-block;

        cursor: pointer;
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        background-color: transparent;
        color: var(--fontColor);
        text-align: center;
        padding: 5px 2px;

        font-size: 0.6rem;
        font-weight: 500;
        
        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;

        width: max-content;
        min-width: 120px;
        bottom: 100%;
        left: 50%;
        margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }


    :root {
        /* Theme */
        --navbarBg: ${(props) => props.theme.navbar};
        --fontColor: ${(props) => props.theme.font};
        --bg: ${(props) => props.theme.background};
        --bgAlt: ${(props) => props.theme.backgroundAlt};
        --primary: ${(props) => props.theme.primary};

        --shadow: ${(props) => `rgba(${props.theme.shadow}, 0.2)`};

        /* Sizes */
        --navbarSize: 60px;
    }
`
