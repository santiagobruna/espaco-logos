import React from 'react';
import { Section, Content, ImageWrapper, Title, Description, List, ListItem, TitleWrapper, SideImagesWrapper } from './style';

interface SectionBlockProps {
    title: string;
    color?: string;
    description: string;
    image: string;
    sideImages?: string[];
    listItems?: { label: string; description: string, imageModal: string }[]; 
    reverse?: boolean;
    onItemClick: (title: string, description: string, imageModal: string) => void; 
    modalImage?: string; 
}

const SectionBlock: React.FC<SectionBlockProps> = ({
    title,
    color,
    description,
    image,
    sideImages = [],
    listItems,
    reverse = false,
    onItemClick,  
}) => {
    const partes = title.split(' ');
    const ultimaPalavra = partes.pop();
    const textoSemUltima = partes.join(' ');

    return (
        <Section reverse={reverse}>
            <Content>
                <TitleWrapper>
                    <ImageWrapper>
                        <img src={image} alt={title} style={{ width: '45px' }} />
                    </ImageWrapper>
                    <Title>
                        {textoSemUltima} <span style={{ color }}>{ultimaPalavra}</span>
                    </Title>
                </TitleWrapper>
                {description.split('\n').map((paragrafo, index) => (
                    <Description key={index}>{paragrafo.trim()}</Description>
                ))}
                {listItems && (
                    <List>
                        {listItems.map((item, index) => (
                            <ListItem key={index} onClick={() => onItemClick(item.label, item.description, item.imageModal)}>
                                {item.label}
                            </ListItem>
                        ))}
                    </List>
                )}
            </Content>
            {sideImages.length > 0 && (
                <SideImagesWrapper>
                    {sideImages.map((src, index) => (
                        <img key={index} src={src} alt={`Imagem ${index + 1}`} />
                    ))}
                </SideImagesWrapper>
            )}
        </Section>
    );
};

export default SectionBlock;
