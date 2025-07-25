import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const HeroSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding-top: 40px;
    text-align: center;
    flex-wrap: wrap;
    margin-bottom: 35px;

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center; 
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        justify-content: center; 
    }
`;

export const HeroImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 74vh;  
    overflow: hidden;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: auto;
        height: 100%;
        min-width: 100%;
        transform: translate(-50%, -50%);
        object-fit: cover;
        
    }
    @media (max-width: 768px) {
        height: 60vh;
        img {
            height: 60vh;
        }
    }
    
`;
export const CtaButton = styled.button`
    position: absolute;
    bottom: 20px;
    left: 20px;
    padding: 10px 20px;
    background-color: ${colors.colorButton};
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1;
`;