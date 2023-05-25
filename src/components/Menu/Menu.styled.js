import styled from 'styled-components';

export const StyledMenu = styled.nav`
    display: ${({ open }) => open ? 'block' : 'none'};
    width: 100%;
    font-family: "poppins-medium", sans-serif;
    position: absolute;
    opacity: ${({ open }) => open ? '1' : '0'};
    visibility: ${({ open }) => open ? '1' : '0'};
    top: 100%;
    left: 0;
    animation: ${({ open }) => open ? 'fadeIn 1s' : 'fadeOutUp 1s'};

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(-20px)
        }
        100% {
            opacity: 1;
            transform: translateY(0)   
        }
    }

    @keyframes fadeOutUp {
        0% {
            opacity: 1;
            transform: translateY(0)
        }
        100% {
            opacity: 0;
            transform: translateY(-20px)   
        }
    }
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
    }

    ul {
        background: ${({ theme }) => theme.primaryMenu};
        padding: 10px 30px 42px;
        margin: 0;
        width: 100%;
        height: auto;
        clear: both;
    }

    ul > li {
        display: block;
        height: auto;
        text-align: left;
        padding: 0;
    }

    ul li a {
        display: block;
        color: #FFFFFF;
        width: auto;
        padding: 15px 0;
        line-height: 16px;
        border: none;

        &:hover {
            color: ${({ theme }) => theme.primaryBurger};
	        padding-left: 1rem;
        }
    }
`;