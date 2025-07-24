import styled from "styled-components";
import { font } from "../../styles/GlobalStyle";
export const Paragraph = styled.p`
    font-size: 1.2rem;
    width: 80%;
    text-align: justify;
    margin-top: 28px;
    strong {
        font-family: ${font.secondaryFont};
    }
    @media (max-width: 767px) {
        font-size: 18px;
        text-align: left;
    }
`