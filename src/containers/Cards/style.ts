import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";
import { ImageWrapper as BaseImageWrapper } from "../SectionBlock/style";

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    gap: 34px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
        padding: 0 20px;
        
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 0 20px;
    }
`
export const Cards = styled.div`
    max-width: 410px;
    width: 100%;
    border-radius: 20px;
    height: 261px;
    background-color: ${colors.colorCard};
    position: relative;
    margin-bottom: -190px;
    z-index: 2;

    @media (max-width: 768px) {
        margin-bottom: 0; 
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        max-width: 410px;
        width: 100%;
    }
`

export const CenteredImageWrapper = styled(BaseImageWrapper)`
    left: 50%;
    transform: translateX(-50%);

    img {
        width: 44px;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const SubTitle = styled.h2`
    font-weight: bold;
    margin: 30px 0 20px 0;
`