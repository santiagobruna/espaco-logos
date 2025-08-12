import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;  
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;  
    pointer-events: all;  
`;
export const ModalContent = styled.div`
    position: relative;
    background-color: white;
    padding: 30px; 
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 500px;
    max-width: 100%;
    h2 {
        margin: 20px 0;
    }
    p {
        text-align: justify;
    }
    button {
        margin-bottom: 20px;  
    }
    img {
        border-radius: 20px;
        margin: 0 auto;
        max-width: 400px;
        height: 200px;
    }
    @media (max-width: 768px) {
        width: 90%;
        padding: 20px; 
        
        h2 {
            font-size: 20px;  
        }
        
        p {
            font-size: 14px;  
        }

        img {
            max-width: 80%;
            height: auto;
        }
    }
`;