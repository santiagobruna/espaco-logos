import { Title } from "../../styles/GlobalStyle";
import { Paragraph } from "./style";
import SectionBlock from "../../containers/SectionBlock";
import { useState } from "react";
import Modal from "../Modal";

import imgCognitivo from '../../assets/alphabet.png';
import imgEsportivo from '../../assets/trophy.png';
import imgCultural from '../../assets/paint.png';

import imgEixoCognitivo from '../../assets/eixo-cognitivo.jpg';
import imgLeitura from '../../assets/leitura.jpg';

import imgCapoeira from '../../assets/capoeira.jpg';
import imgJudo from '../../assets/judo.jpg';

import imgArtistico from '../../assets/image-artistico-cultural1.jpg';
import imgJazz from '../../assets/jazz.jpg';
const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<{ title: string; description: string, image: string }>({
        title: '',
        description: '',
        image: ''
    });

    const openModal = (title: string, description: string, image: string) => {
        setModalContent({ title, description, image });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div id="projetos" className="container">
            <Title>Programa Pequeno Grande Cidadão</Title>
            <Paragraph>O Projeto <strong> PEQUENO GRANDE CIDADÃO</strong> tem como pilar central contribuir para o pleno desenvolvimento físico, emocional e intelectual de crianças identificadas em diferentes contextos de vulnerabilidade. Buscamos, ainda, empoderar as crianças, tornando-as agentes de transformação em suas comunidades. Através de oficinas que ocorrem diariamente no contra turno escolar, investimos na formação de cidadãos conscientes, contribuindo para um futuro melhor, onde todos possam exercer seus direitos e deveres de forma plena e responsável. </Paragraph>
            <SectionBlock
                    title="Eixo do Desenvolvimento Cognitivo"
                    color="#1E90FF"
                    description="O desenvolvimento cognitivo está diretamente ligado a estímulos, intervenções adequadas, amadurecimento psicológico, aumento da concentração e construção emocional, o que é oferecido  de maneira eficaz para cada criança conforme as suas necessidades. A interseção e integração dessas práticas educacionais resultam em um ambiente de aprendizado rico e diversificado, quando integradas.
                    
                    Em resumo, as alterações positivas são inúmeras, tais métodos educativos são impactantes e significativos para  formação das crianças, gerando um aprendizado mais completo e eficaz, pois essa educação incorpora diferentes dimensões  tornando-se mais abrangente e capaz de atender as múltiplas necessidades das crianças. Assim, estamos preparando cada um para um futuro próspero.

                    Projetos contemplados:
                    "
                    image={imgCognitivo}
                    sideImages={[imgEixoCognitivo, imgLeitura]}
                    listItems={[
                    { label: 'Complemento da Alfabetização', description: `Esta é uma atividade fundamental para o
                    desenvolvimento das habilidades de leitura e escrita das crianças. Este tipo de oficina é especialmente voltado para as crianças que precisam de um suporte adicional.`,
                    imageModal: imgEixoCognitivo
                    },
                    { label: 'Reforço Escolar', 
                    description: `
                        Esta oficina é uma iniciativa educativa que
                        visa apoiar as crianças em suas dificuldades
                        de aprendizado, oferecendo um ambiente

                        acolhedor e estimulante para o desen-
                        volvimento de habilidades acadêmicas.

                        Outro aspecto importante da oficina é a
                        individualização do ensino. Cada criança

                        pode avançar em seu próprio ritmo, rece-
                        bendo atenção personalizada que ajuda a

                        construir sua autoconfiança e motivação

                        para os estudos. Isso é especialmente be-
                        néfico para aqueles que enfrentam difi-
                        culdades em suas escolas, pois permite que

                        eles superem barreiras e alcancem melhores
                        resultados.    
                    `
                    , imageModal: imgEixoCognitivo },
                    { label: 'Oficina de Leitura',description: `
                        Esse tipo de atividade oferece uma série de
                        benefícios que vão além da simples prática

                        da leitura, contribuindo para o desenvol-
                        vimento integral dos pequenos leitores.

                        Primeiramente, a oficina de leitura estimula
                        a imaginação e a criatividade. Ao explorar
                        diferentes gêneros literários e narrativas, as
                        crianças têm a oportunidade de vivenciar
                        novas histórias, personagens e mundos, o
                        que enriquece sua capacidade de imaginar
                        e criar. Essa estimulação é fundamental

                        para o desenvolvimento cognitivo e emo-
                        cional.
                    ` 
                    , imageModal: imgLeitura },
                    ]}
                    reverse={false}
                    onItemClick={openModal} 
            />

            <SectionBlock
                    title="Eixo do Desenvolvimento Esportivo"
                    color="#00B37E"
                    description="O desenvolvimento esportivo para crianças é um aspecto fundamental para a promoção de saúde, bem-estar e habilidades sociais. No Espaço Logos, esse conceito ganha uma dimensão especial, onde a prática esportiva é integrada a valores educacionais e de formação integral.
                    
                    Nossa abordagem para o desenvolvimento esportivo combina teoria e prática, utilizando jogos, atividades lúdicas e competições saudáveis. Nossos educadores são capacitados para criar um ambiente seguro e estimulante, onde as crianças se sintam motivadas a participar e a se superar. As atividades são adaptadas para diferentes faixas etárias e níveis de habilidade, garantindo que cada criança possa progredir em seu próprio ritmo.

                    O desenvolvimento esportivo em nossa instituição vai além da simples prática de atividades físicas. É uma oportunidade de crescimento integral, onde as crianças aprendem valores essenciais que as acompanharão por toda a vida.
                    
                    Projetos contemplados:
                    "
                    image={imgEsportivo}
                    sideImages={[imgJudo, imgCapoeira]}
                    listItems={[
                        { label: 'Judô', description: `
                            O judô é uma arte marcial que oferece uma
                            série de benefícios para as crianças, tanto no
                            aspecto físico quanto no emocional. As aulas
                            de judô são uma excelente oportunidade

                            para desenvolver habilidades motoras, dis-
                            ciplina e respeito, além de promover a socia-
                            lização entre os pequenos.

                            A aula é conduzida por instrutor qualificado,

                            que garante um ambiente seguro e acolhe-
                            dor. As atividades são adaptadas para a faixa

                            etária das crianças, tornando o aprendizado
                            divertido e acessível.
                            ` 
                        , imageModal: imgJudo },
                        { label: 'Capoeira', description: `
                            Acapoeira também é uma arte marcial que
                            combina elementos de dança, música,
                            acrobacias e jogo, e tem se mostrado uma
                            excelente atividade para crianças. Durante
                            as aulas, elas aprendem movimentos
                            básicos, como a ginga, além de acrobacias

                            e golpes. Esses exercícios ajudam a me-
                            lhorar a coordenação motora, o equilibrio e

                            a flexibilidade. Além disso, a prática regular
                            contribui para o fortalecimento muscular e o

                            condicionamento cardiovascular, promo-
                            vendo um estilo de vida ativo e saudável.
                            ` 
                        , imageModal: imgCapoeira },
                    ]}
                    reverse={true}
                    onItemClick={openModal}
            />
            <SectionBlock
                    title="Eixo do Desenvolvimento Artístico-Cultural"
                    color="#F2D11A"
                    description="O desenvolvimento artístico e cultural é um processo fundamental para o enriquecimento da sociedade e a promoção da diversidade. Por meio da arte, expressões culturais e iniciativas criativas, as crianças têm a oportunidade de refletir sobre suas identidades, histórias e valores. O acesso à educação artística e cultural é crucial para fomentar a criatividade, estimular o pensamento crítico e promover a inclusão social.
                    
                    Portanto, o ato de investir no desenvolvimento artístico das crianças é uma linda forma de investir em seu futuro, de acreditar que é possível mudar o futuro através da educação. Proporcionar a elas a oportunidade de ingressar em todas essas atividades, contribui imensamente para o cultivo da criatividade e cultura, além de desenvolver a  a expressão individual adequada, preparando-as para enfrentar os desafios da vida de forma mais resiliente, inovadora e perspicaz.

                    Projetos contemplados:
                    "
                    image={imgCultural}
                    sideImages={[imgArtistico, imgJazz]}
                    listItems={[
                    { label: 'Violão', description: `
                        As aulas de violão oferecem para as crianças
                        uma ampla gama de benefícios que vão

                        muito além do aprendizado musical: desen-
                        volvimento cognitivo, coordenação motora,

                        disciplina e paciência, expressão emocional
                        e, principalmente, a socialização.
                        Em suma, as aulas de violão são uma
                        excelente maneira de promover o
                        desenvolvimento integral das crianças,

                        proporcionando não apenas habilida-
                        des musicais, mas também valiosas

                        lições de vida que as acompanharão
                        por toda a jornada.
                        ` 
                    , imageModal: imgArtistico },
                    { label: 'Cavaquinho', description: `
                        Durante as aulas, as crianças aprendem
                        não apenas a tocar o instrumento, mas
                        também conceitos básicos de música,
                        como ritmo, melodia e harmonia.
                        Além disso, tocar cavaquinho pode ajudar a

                        desenvolver habilidades motoras, disci-
                        plina e concentração. As crianças também

                        têm a oportunidade de socializar, já que
                        muitas aulas são em grupo, permitindo que

                        elas toquem juntas e aprendam a impor-
                        tância do trabalho em equipe.
                        ` 
                        , imageModal: imgArtistico },
                    { label: 'Percussão', description: `
                        A percussão é uma experiência divertida e
                        enriquecedora que introduz as crianças ao
                        mundo da música interativa. Nessas aulas,
                        elas têm a oportunidade de explorar uma
                        diversidade de instrumentos de percussivos.

                        Elas aprendem a manter o ritmo, a coor-
                        denação e a escuta ativa, habilidades que

                        são fundamentais não apenas na música,
                        mas em diversas áreas da vida. Além disso, a
                        percussão é uma excelente maneira de

                        expressar emoções e liberar energia, propor-
                        cionando uma visão geral e saudável para as

                        crianças.
                        ` 
                        , imageModal: imgArtistico },
                    { label: 'Jazz', description: `
                        A aulas de jazz para crianças é uma ex-
                        periência vibrante e divertida, que combina

                        movimento, música e expressão artística. É
                        um estilo de dança, caracterizado por seus
                        ritmos energéticos e movimentos dinâmicos,
                        é perfeito para estimular a criatividade e a
                        coordenação motora das crianças.

                        Além dos aspectos técnicos da dança, as au-
                        las de jazz também promovem valores impor-
                        tantes, como a disciplina, o trabalho em equi-
                        pe e a confiança.
                        ` 
                        , imageModal: imgJazz },
                    { label: 'Hip Hop', description: `
                        Durante esta oficina, as crianças têm a
                        oportunidade de aprender os passos e
                        movimentos característicos da dança.
                        Esses movimentos ajudam a melhorar a
                        coordenação motora, a agilidade e o
                        condicionamento físico. Além disso, a

                        dança é uma forma de exercício que con-
                        tribui para a saúde e o bem estar, promo-
                        vendo um estilo de vida ativo desde cedo.
                        ` 
                        , imageModal: imgJazz},
                    ]}
                    reverse={false}
                    onItemClick={openModal}
            />
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={modalContent.title}
                description={modalContent.description}
                image={modalContent.image || ''}  
            />
        </div>
    );
}
export default Projects;