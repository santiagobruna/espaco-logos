import { Cards, CenteredImageWrapper, SubTitle } from "./style";
interface SectionCardProps {
    subTitle: string;
    description: string;
    image: string;
}
export default function Card ({subTitle, description, image }: SectionCardProps){
    return (
        <div className="container">
            <Cards>
                <CenteredImageWrapper>
                    <img src={image}/>
                </CenteredImageWrapper>
                <SubTitle>{subTitle}</SubTitle>
                <p>
                    {description}
                </p>
            </Cards>
        </div>
    )
}