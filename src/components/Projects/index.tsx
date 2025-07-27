import { Title } from "../../styles/GlobalStyle";
import { Paragraph } from "./style";
import SectionBlock from "../../containers/SectionBlock";

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
                    { label: 'Complemento da Alfabetização', url: 'https://espacologos.org.br/letrando/' },
                    { label: 'Reforço Escolar', url: 'https://espacologos.org.br/rematar/' },
                    { label: 'Oficina de Leitura', url: 'https://espacologos.org.br/leitura-muito-prazer/' },
                    ]}
                    reverse={false}
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
                        { label: 'Judô', url: 'https://espacologos.org.br/arte-suave/' },
                        { label: 'Capoeira', url: 'https://espacologos.org.br/ginga-de-corpo/' },
                    ]}
                    reverse={true}
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
                    { label: 'Teatro', url: 'https://espacologos.org.br/corpo-em-cena/' },
                    { label: 'Violão', url: 'https://espacologos.org.br/todos-os-tons/' },
                    { label: 'Cavaquinho', url: 'https://espacologos.org.br/todos-os-tons/' },
                    { label: 'Percussão', url: 'https://espacologos.org.br/todos-os-tons/' },
                    { label: 'Jazz', url: 'https://espacologos.org.br/corpo-em-movimento/' },
                    { label: 'Hip Hop', url: 'https://espacologos.org.br/hip-hop-dance/' },
                    { label: 'Folclore', url: 'https://espacologos.org.br/leitura-muito-prazer/' },
                    ]}
                    reverse={false}
            />
        </div>
    );
}
export default Projects;