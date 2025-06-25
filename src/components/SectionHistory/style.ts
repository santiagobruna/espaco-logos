import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SectionHistoryContainer = styled.section`
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 117px auto;
    gap: 80px;

    h2 {
        font-size: 26px;
        font-weight: bold;
    }
    p {
        max-width: 600px;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 16px;
        text-align: justify;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 16px;
       
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        flex-direction: column;
        
    }
`
export const ImageContainer = styled.div`
    img {
        width: 500px;
        height: auto;
        border-radius: 50px;
        border: 2px solid ${colors.colorTitle};
    }

`
export const TituloWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;

    h2 {
        position: relative;
        z-index: 2;
        margin: 0;
    }
`

export const LivrosImg = styled.img`
    position: absolute;
    top: -40px;
    left: -40px;
    width: 50px;
    z-index: 2;

    @media (max-width: 768px) {
        /* display: none; */
        left: -10px;
        width: 40px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        width: 50px;
    }
`