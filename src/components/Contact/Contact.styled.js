import styled from 'styled-components';

export const StyledContact = styled.section`
    background: ${({ theme }) => theme.primaryMenu};
    color: #FFFFFF;
    width: 100%;
    height: 100%;
    max-width: 68%;
    margin: 0 auto;
    font-family: "poppins-bold", sans-serif;
    text-rendering: optimizeLegibility;

    @media (max-width: ${({ theme }) => theme.tablet}) {
        max-width: 42.5em;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        max-width: 86%;
    }

    .cont {
        margin: 35vh 0 30vh 0;
    }

    h1 {
        color: #FFFFFF;
        font-family: "poppins-semibold", sans-serif;
        line-height: 140%;
        font-size: 6.2em;
        font-weight: 600;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

        @media (max-width: ${({ theme }) => theme.tablet}) {
            font-size: 5.2em;
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 58px;
        }
    }

    .cont .content {
        max-width: 70%;
        margin: 0 auto;
        color: #FFFFFF;
        padding: 0 0 10vh 0;


        @media (max-width: ${({ theme }) => theme.mobile}) {
            max-width: 100%;
            margin: auto;
        }
    }

    h4 {
        color: #FFFFFF;
        line-height: 140%;
        font-family: "poppins-semibold", sans-serif;
        font-size: 38px;
        font-weight: 600;
        margin: 20vh 0 4vh 0;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            margin: 13vh 0 4vh 0;
        }
    }

    .size-large {
        line-height: 160%;
        font-size: 24px;
        margin-bottom: 4vh;
    }

    p {
        line-height: 170%;
        font-family: "poppins-regular", sans-serif;
        font-size: 18px;
        margin-bottom: 3vh;
    }

    .links a {
        display: block;
        margin: 3vh 0;
        font-family: "poppins-medium", sans-serif;
        font-weight: 600;
        font-size: 18px;
        color: ${({ theme }) => theme.primaryBurger};

        &:hover {
	        padding-left: 2rem;
        }
    }
`;