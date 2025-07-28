import styled from "styled-components";
export const Section = styled.section`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
    justify-content: space-between;
    padding: 40px 20px;
    background-color: #f9f9f9;
    @media (min-width: 768px) and (max-width: 1024px) {
        align-items: center;
        flex-direction: column;
    }
`;

export const TextArea = styled.div`
    flex: 1;
    max-width: 700px;

    p {
        text-align: justify;
        margin-bottom: 10px;
    }
`;

export const QRContainer = styled.div`
    text-align: center;

    img {
        max-width: 400px;
        border: 3px solid red;
        padding: 5px;
        background: white;
        border-radius: 10px;

        @media(max-width: 768px){
            margin: 0 auto;
            max-width: 300px;
        }
        
    }

    p {
        margin-top: 10px;
        font-weight: bold;
    }
`;

export const Button = styled.button`
    background-color: #007bff;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #0056b3;
    }
`;
