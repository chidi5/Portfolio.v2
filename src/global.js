import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        align-items: center;
        background: ${({ theme }) => theme.primaryMenu};
        color: ${({ theme }) => theme.primaryText};
        font-family: "lora-regular", serif;
        height: 100vh;
        text-rendering: optimizeLegibility;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: "poppins-semibold", sans-serif;
        color: #FFFFFF;
        font-style: normal;
        text-rendering: optimizeLegibility;
        margin-bottom: 2.1rem;
    }
    h3, h4 {
        margin-bottom: 1.8rem;
    }
    h5, h6 {
        font-family: "poppins-bold";
        margin-bottom: 1.2rem;
    }
    h1 {
        font-size: 3.1rem;
        line-height: 1.355;
        letter-spacing: -.1rem;
    }
`