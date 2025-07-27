import { ContainerFooter, SectionLinks } from "./style";
import { FaWhatsapp, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';
const Footer = () => {
    return (
        <ContainerFooter>
            <div className="top-footer">
                <div>
                    <a href="#inicio">
                        <img src={logo} alt="" />
                    </a>
                    <h2>Transformando vidas através do amor.</h2>
                </div>
                <SectionLinks>
                    <h3>Encontre-nos</h3>
                    <ul>
                        <li>
                            <FaWhatsapp style={{ marginRight: '4px', color: '#25D366', fontSize: '24px' }} />
                            WhatsApp: <a href="https://wa.me/5521981899230" target="_blank" rel="noopener noreferrer" >(21) 98189-9230</a>
                        </li>
                        <li>
                            <FaEnvelope style={{ marginRight: '4px', color: '#D44638', fontSize: '24px' }} />
                            Email: <a href="mailto:espacologos@gmail.com" >espacologos@gmail.com</a>
                        </li>
                        <li>
                            <FaGlobe style={{ marginRight: '4px', color: '#0077B5', fontSize: '24px' }} />
                            Site: <a href="https://www.espacologos.org.br" target="_blank" rel="noopener noreferrer">www.espacologos.org.br</a>
                        </li>
                        <li>
                            <FaMapMarkerAlt style={{ marginRight: '4px', color: '#EA4335', fontSize: '24px' }} />
                            Endereço: Rua Conde de Bonfim, 964 - Tijuca - Rio de Janeiro - RJ
                        </li>
                    </ul>
                </SectionLinks>
            </div>
            <span>Desenvolvido por <a href="https://portfolio-bay-sigma-18.vercel.app/" target="_blank"  rel="noopener noreferrer">Bruna Santiago</a></span>
        </ContainerFooter>
    )
}
export default Footer;