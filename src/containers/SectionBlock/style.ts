import styled from 'styled-components';
import { font } from "../../styles/GlobalStyle";
interface SectionProps {
    reverse?: boolean;
}
export const Section = styled.section<SectionProps>`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    gap: 80px;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
`;

export const TitleWrapper = styled.div`
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
    position: absolute;
    top: -30px;
    left: -50px; 
    img {
        width: 40%;
        height: auto;
        border-radius: 12px;
    }
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const SideImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
        width: 100%;
        max-width: 420px;
        height: auto;
        border-radius: 12px;
    }

    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        img {
            max-width: 45%;
        }
    }
`;
export const Title = styled.h2`
    color: black;
    font-size: 22px;
    display: block;
    text-align: left;
    white-space: nowrap;
    font-family: ${font.secondaryFont};
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    text-align: left;
    width: 100%;
    @media (max-width: 767px) {
        max-width: 400px;
        width: 100%;
        padding: 0 10px;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        max-width: 600px;
        width: 100%;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    text-align: left;
`;

export const ListItem = styled.li`
    margin-bottom: 10px;
    color: #1e90ff;
    text-decoration: underline;
    cursor: pointer;
`;
