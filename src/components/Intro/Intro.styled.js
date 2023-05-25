import styled from 'styled-components';
import introBg from '../../static/images/intro-bg.jpg'

export const StyledIntro = styled.section`
    background: #151515 url(${introBg}) no-repeat center bottom;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    min-height: 616px;
    height: 100vh;
    display: table;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    text-align: center;

    .intro-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #111111;
        opacity: .85;
    }

    .intro-content {
        z-index: 10;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        -webkit-transform: translateY(-2.1rem);
        -ms-transform: translateY(-2.1rem);
        transform: translateY(-2.1rem);
    }

    .row {
        width: 94%;
        max-width: 1140px;
        margin: 0 auto;
        margin-top: 20vh;

        @media (max-width: ${({ theme }) => theme.tablet}) {
            width: auto;
            padding-left: 25px;
            padding-right: 25px;
            margin-top: 10vh;
        }
    }

    .row h5 {
        color: ${({ theme }) => theme.primaryPink};
        font-family: "poppins-bold", sans-serif;
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.555;
        margin-bottom: 0;
        text-transform: uppercase;
        letter-spacing: .3rem;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 0.8rem;
        }
    }

    .row h1 {
        color: #FFFFFF;
        font-family: "poppins-medium", sans-serif;
        font-size: 98px;
        font-weight: 600;
        line-height: 1.071;
        max-width: 900px;
        margin-top: 0;
        margin-bottom: 0.6rem;
        margin-left: auto;
        margin-right: auto;
        text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

        @media (max-width: ${({ theme }) => theme.tablet}) {
            font-size: 77px;
        }

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 37px;
        }
    }

    .row p {
        font-family: "lora-regular", serif;
        font-size: 1rem;
        line-height: 2.4rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
        color: #FFFFFF;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 0.4rem;
        }
    }

    .row p span {
        color: rgba(255, 255, 255, 0.3);
    }

    .row button {
        border: 3px solid #313131;
        border-color: rgba(255, 255, 255, 0.3);
        margin-top: 1.6rem;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        color: #FFFFFF !important;
        background: transparent !important;
        height: 3.5rem !important;
        line-height: 0.4rem !important;
        padding: 0px 1.5rem !important;
        transition: border-color 1s ease-out;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 0.4rem;
            padding: 0px 1rem !important;
            height: 2.5rem !important;
            margin-top: 1rem;
        }

        &:hover {
            border-color: ${({ theme }) => theme.primaryPink};
        }
    }
`;
