import pipa from '../../assets/kite-flying.png';
import nuvem from '../../assets/clouds.png';
import hero from '../../assets/hero.jpg';
import { HeroSection, Title, PipaImg, NuvemImg, HeroImageWrapper, CtaButton } from './style';
const Hero = () => {
    return (
    <div>
            <HeroSection>
                <PipaImg src={pipa} alt="Pipa" />
                <Title>
                    Transformando Crianças <br />
                    para Transformar a Sociedade
                </Title>
                <NuvemImg src={nuvem} alt="Nuvem" />
            </HeroSection>
            <HeroImageWrapper>
                <img src={hero} alt="Banner" />
                <CtaButton>Faça parte da mudança</CtaButton>
            </HeroImageWrapper>
    </div>
    )
}
export default Hero;