import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const colors = {
    colorMenu: '#4283AF',
    colorButton: '#1D649B',
    colorTitle: '#0069A6',
    colorSection: '#F3DA46',
    colorCard: '#EDE9E9',
    colorFooter: '#C3DBF5',
    white: ' #FFFFFF',
}
export const font = {
    secondaryFont: '"ADLaM Display", system-ui',
    primary: 'Montserrat Alternates", sans-serif'
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }
`
export const PipaImg = styled.img`
    width: 92px;
    @media (max-width: 768px) {
        display: none;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 78px; /* menor nas telas médias */
    }
`;

export const NuvemImg = styled.img`
    width: 92px;
    @media (max-width: 768px) {
        display: none;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 78px; 
    }
`;