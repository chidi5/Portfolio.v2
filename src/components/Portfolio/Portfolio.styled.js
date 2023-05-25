import styled from 'styled-components';

export const StyledPorfolio = styled.section`
    background: ${({ theme }) => theme.primaryMenu};
    color: #FFFFFF;
    width: 100%;
    height: 100%;
    max-width: 68%;
    margin: 0 auto;
    font-family: "poppins-bold", sans-serif;
    text-rendering: optimizeLegibility;

    @media (max-width: ${({ theme }) => theme.tablet}) {
        max-width: 37.5em;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        max-width: 86%;
    }

    .cont {
        margin: 35vh 0 30vh 0;
    }

    .cont a {
        text-decoration: none;
        cursor: pointer;
        color: #000000;
    }

    .cont a div {
        margin: 12vh 0;
        transition: all .4s cubic-bezier(0.2, 0.6, 0.2, 1);

        @media (max-width: ${({ theme }) => theme.mobile}) {
            margin: 10vh 0;
        }

        &:hover {
	        padding-left: 3rem;
        }

    }

    .last {
        padding-bottom: 15vh;
    }

    h2 {
        font-family: "poppins-bold", sans-serif;
        font-weight: 600;
        line-height: 140%;
        font-size: 100px;
        font-size: 5.2em;
        margin: 0;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 3.2em;
        }
    }

    p {
        font-family: "poppins-medium", sans-serif;
        font-size: 17px;
        font-weight: 600;
        margin-bottom: 0;
        color: ${({ theme }) => theme.primaryBurger};

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 16px;
        }
    }
`;