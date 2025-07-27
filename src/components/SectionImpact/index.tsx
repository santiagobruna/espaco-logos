import Card from "../../containers/Cards";
import { Title } from "../../styles/GlobalStyle"
import { ContainerCards } from "../../containers/Cards/style";
import { ImpactData, ImpactInfo } from "./style";
import livros from '../../assets/pilha-de-livros.png'
import apoio from '../../assets/apoio.png';
import inspiracao from '../../assets/ideias.png';
import line from '../../assets/line.png'
const SectionImpact = () => {
    return (
        <div id="nosso-impacto" className="container">
            <Title>Como atuamos</Title>
            <ContainerCards>
                <Card
                subTitle="Educação e Conhecimento"
                description="Acreditamos que o conhecimento
                transforma vidas. Oferecemos atividades 
                educativas para estimular o aprendizado."
                image={livros}
                />
                <Card
                subTitle=" Inspiração para o Futuro"
                description="Nosso impacto vai além do presente: queremos inspirar sonhos e mostrar que um futuro melhor é possível, construindo esperança dentro da comunidade."
                image={inspiracao}
                />
                <Card
                subTitle=" Apoio e Desenvolvimento"
                description="Cada criança merece  oportunidade para crescer com dignidade.  Através do acolhimento e do suporte emocional, incentivamos o desenvolvimento pessoal
                e social."
                image={apoio}
                />
            </ContainerCards>
            <section className="impact-info">
                <ImpactInfo>
                    <h2>Nosso Impacto social</h2>
                    <p>
                        Nosso impacto social não é apenas uma marca que deixamos, mas uma semente que
                        transforma vidas e constrói um futuro mais justo e solidário para todos.
                    </p>
                    <ImpactData>
                        <div>
                            <strong>+1000</strong>
                            <span>crianças atendidas</span>
                        </div>
                            <img src={line} alt="" />
                        <div>
                            <strong>+27</strong>
                            <span>anos atendendo</span>
                        </div>
                            <img src={line} alt="" />
                        <div>
                            <strong>+6000</strong>
                            <span>famílias impactadas</span>
                        </div>
                    </ImpactData>
                </ImpactInfo>
            </section>
        </div>
    )
}
export default SectionImpact;