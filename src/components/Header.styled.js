import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: block;
    background: ${({ theme }) => theme.primaryMenu};
    min-width: 220px;
    min-height: 66px;
    position: fixed;
    left: 13%;
    top: 0;
    z-index: 30;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        left: 25px;
    }
`;