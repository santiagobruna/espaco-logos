import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const ContainerFooter = styled.div`
    background-color: ${colors.colorFooter};
    padding: 60px 20px;
    margin-top: 60px;

    .top-footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        div {
            max-width: 350px;

            img {
                width: 250px;
                margin-bottom: 20px;
                cursor: pointer;
            }
            h2 {
                @media(max-width: 768px){
                    margin-bottom: 80px;
                }
            }
        }
    }
    span {
        display: block;
        margin-top: 40px;
        text-align: center;
        font-size: 14px;
    }
`

export const SectionLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3{
        font-weight: bold;
    }
    ul {
    padding: 0;
    margin: 0;
    list-style: none;
    }

    li {
        display: flex;
        align-items: center;
        gap: 8px;  
        margin-bottom: 12px;
    }

    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`