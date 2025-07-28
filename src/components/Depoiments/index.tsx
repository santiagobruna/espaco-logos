import citacaoDireita from '../../assets/citacao-direita.png';
import citacaoEsquerda from '../../assets/citacao-esquerda.png';
import pessoaDepoimento from '../../assets/pessoa.jpeg';
import pessoaDepoimento2 from '../../assets/pessoa1.jpeg';
import pessoaDepoimento3 from '../../assets/pessoa2.jpeg';
import { Title } from '../../styles/GlobalStyle';
import { TestimonialCard, TestimonialsGrid, Section, Subtitle, QuoteLeft, QuoteRight, Text, Author, AuthorImg, AuthorName, YellowLine } from './style';
const testimonials = [
    {
        text: `Eu sou o Thiago e hoje eu quero falar com vocês sobre o Espaço Logos, que foi fundado na minha antiga trajetória na música e também para a minha vida pessoal.

    Quando criança entrei na instituição e dentre todas as aulas que participei, foi através do covachinho que descobri a minha paixão pela música. Foi um lugar que me acolheu com carinho e me proporcionou muitas oportunidades.

    A Espaço Logos é uma ONG muito importante para a comunidade onde cresci. Lá, muitas crianças têm a chance de descobrir novas habilidades e aprender música, arte e cultura. Além disso, o Logos ensina valores importantes para levarmos por toda a vida, como respeito, dedicação e solidariedade e muitos outros. 🎶`,
        authorName: 'Thiago',
        authorImg: pessoaDepoimento,
    },
    {
        text: `Eu gostei muito , eu achei incrível esses anos que eu fiquei aí.

    As crianças, A TIA VERA principalmente !!!, ela ajuda, se a pessoa estiver se sentindo mal com alguma coisa ela pergunta se pode ajudar, pergunta se aconteceu alguma coisa.

    Eu amei as aulas de HIP HOP, JAZZ, REFORÇO e todas as outras aprendi muito!!!

    Eu entrei com 6 anos estou agora com 13 anos basicamente eu CRESCI no CURSO.
    Nunca vou me esquecer do CURSO que foi muito bom pra mim , aprendi muito , e com a TIA VERA ❤️🥰.

    Cada dia no curso foi muito especial pra mim! 💗
    Só tenho agradecer o ESPAÇO LOGOS !!!`,
        authorName: 'Stefanny',
        authorImg: pessoaDepoimento3,
    },
    {
        text: `Passando aqui para deixar registrado, finalizei meus 8 anos de força militar e já ingressei na faculdade cursando direito, fiz uma prova e obtive pontos que me proporcionaram 70% de bolsa e hoje estou cursando direito na faculdade Veiga de Almeida, quero agradecer a senhora por cada conselho.

    Cada obstáculo que venço na vida me lembro de tudo que a senhora falava e ensinava, pude obter bastante conhecimento e o principal, ser um cidadão do bem !
    Obrigado, breve espero a senhora na minha formatura 🙇‍♂️
    Agradecer é um sentimento poderoso que nos faz reconhecer as pequenas alegrias da vida e valorizar as pessoas que tornam nossa jornada mais leve e feliz.`,
        authorName: 'Fernando Luiz',
        authorImg: pessoaDepoimento2,
    },
];

const Depoimentos = () => {
    return (
        <Section id="depoimentos" aria-label="Seção de depoimentos">
        <Title>Depoimentos</Title>
        <Subtitle>
            Nosso público são a nossa melhor referência! Veja o que eles dizem sobre a experiência no Espaço Logos.
        </Subtitle>
        <TestimonialsGrid>
            {testimonials.map(({ text, authorName, authorImg }, index) => (
            <TestimonialCard key={index} role="article" aria-label={`Depoimento de ${authorName}`}>
                <QuoteLeft src={citacaoDireita} alt="Aspas esquerda" />
                <QuoteRight src={citacaoEsquerda} alt="Aspas direita" />
                <Text>{text}</Text>
                <Author>
                <AuthorImg src={authorImg} alt={`Foto de ${authorName}`} />
                <AuthorName>{authorName}</AuthorName>
                </Author>
                <YellowLine />
            </TestimonialCard>
            ))}
        </TestimonialsGrid>
        </Section>
    );
};

export default Depoimentos;
