import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";


export const ImpactInfo = styled.div`
    background-color: ${colors.colorSection}; 
    border-radius: 20px;
    padding: 40px 24px;
    margin-top: 40px;
    text-align: center;
    position: relative;
    z-index: 1;
    h2 {
        font-size: 24px;
        font-weight: bold;
        padding: 120px 0 16px 0;
        @media (max-width: 768px) {
            padding: 20px 0 16px 0;
        }
    }

    p {
        max-width: 800px;
        margin: 0 auto 40px;
        font-size: 16px;
        text-align: left;
    }
`;

export const ImpactData = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        strong {
            font-size: 24px;
            font-weight: bold;
        }

        span {
            font-size: 14px;
            font-weight: bold;
        }
    }
    
    @media(max-width: 768px){
        gap: 30px;
        img {
            display: none;
        }
    }
`;
