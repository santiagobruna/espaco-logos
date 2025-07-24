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
    .container {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        gap: 20px;
        padding-top: 40px;
        text-align: center;
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
export const Title = styled.h1`
    font-family: ${font.secondaryFont} !important;
    color: ${colors.colorTitle};
    font-size: 34px;

    @media (max-width: 767px) {
        font-size: 22px;
        text-align: center;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 38px;
        text-align: center;
    }
`