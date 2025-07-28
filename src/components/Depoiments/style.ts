import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
    padding: 40px 20px;
    max-width: 900px;
    margin: 80px auto 80px auto;
    text-align: center;
`;


export const Subtitle = styled.p`
    font-weight: 600;
    margin: 40px 0;
`;

export const TestimonialsGrid = styled.div`
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr;
    align-items: stretch; 

    @media(min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        & > :nth-child(odd):last-child {
            grid-column-start: 1;
            grid-column-end: 3; 
            justify-self: center;
            max-width: 50%;
            margin: 0 auto; 
        }
    }

    @media(min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        & > :nth-child(odd):last-child {
            grid-column-start: 1;
            grid-column-end: 3; 
            justify-self: center;
            max-width: 50%;
            margin: 0 auto; 
        }
    }
`;

export const TestimonialCard = styled.article`
    position: relative;
    background: ${colors.colorCardDepoiments};
    border-radius: 12px;
    padding: 24px;
    position: relative;
    text-align: left;
    box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
    height: 100%;
`;

export const QuoteLeft = styled.img`
    width: 24px;
    position: absolute;
    top: 8px;
    left: 14px;
    opacity: 0.15;
`;

export const QuoteRight = styled.img`
    width: 24px;
    position: absolute;
    bottom: 66px;
    right: 16px;
    opacity: 0.15;
`;

export const Text = styled.p`
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 24px;
    white-space: pre-line;
`;

export const Author = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const AuthorImg = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
`;

export const AuthorName = styled.span`
    font-weight: 700;
    font-size: 1rem;
`;

export const YellowLine = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 12px;
    background-color: #ffd600;
    margin-top: 12px;
    border-radius: 20px;
`;
