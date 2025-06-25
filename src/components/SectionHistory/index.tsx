import livros from '../../assets/pilha-de-livros.png';
import espaco from '../../assets/espaco-logos.jpeg';
import { ImageContainer, LivrosImg, SectionHistoryContainer, TituloWrapper } from './style';
const SectionHistory = () => {
    return (
        <SectionHistoryContainer className="section-history">
            <div>
                <TituloWrapper>
                    <LivrosImg src={livros} alt="" />
                    <h2>Nossa história</h2>
                </TituloWrapper>
                <p>
                    O Espaço Logos, é uma organização não governamental  que acredita  que a educação é a base para um futuro digno e extraordinário para todas as crianças. A  proposta da instituição está marcada em seu nome cidadania consciente, disponibilizando um planejamento responsável e empenhado com o futuro, o senso social e o bem-estar das pessoas envolvidas.
                </p>
                <p>
                    O nosso compromisso é com o atendimento socioeducativo de crianças na faixa etária entre 6 e 14 anos em circunstâncias de vulnerabilidade social. Temos consciência de que esse período é de extrema importância para o desenvolvimento emocional, psicológico e pedagógico  de cada uma delas.
                </p>
            </div>
            <ImageContainer>
                <img src={espaco} alt="" />
            </ImageContainer>
        </SectionHistoryContainer>
    )
}
export default SectionHistory;