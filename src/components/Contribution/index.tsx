import { Section, TextArea, Button, QRContainer } from './style';
import qrcode from '../../assets/qrcode-pix.png'
import { Title } from '../../styles/GlobalStyle';

export default function SectionDoacao() {
  const handleCopyPix = () => {
    navigator.clipboard.writeText("03.760.510/0001-55");
    alert("Chave Pix copiada para a área de transferência!");
  };
  return (
    <Section id="doacao">
      <TextArea>
        <Title style={{color: 'black', marginBottom: '20px'}}>Como contribuir ?</Title>
        <p>COLABORE E FAÇA PARTE DA NOSSA MISSÃO!</p>
        <p>
          Cada doação que recebemos é um passo firme em direção a um futuro mais brilhante para as crianças.
          Por meio de nossos programas educativos e culturais, estamos ampliando horizontes e consolidando valores sociais essenciais para a formação de cidadãos conscientes.
        </p>
        <p>
          Ao contribuir com o ESPAÇO LOGOS, você está se unindo a uma corrente de solidariedade que faz a diferença no dia a dia de crianças e famílias que precisam do nosso apoio.
        </p>
        <p>
          Cada doação tem um impacto direto e duradouro. Junte-se a nós nessa missão e ajude a transformar vidas.
        </p>
        <p>
          FAÇA SUA DOAÇÃO HOJE E SEJA PARTE DESTA HISTÓRIA DE ESPERANÇA E OPORTUNIDADE!
        </p>
        <Button onClick={handleCopyPix}>Doe agora</Button>
      </TextArea>

      <QRContainer>
        <img src={qrcode} alt="QR Code para doação" />
        <p>PIX: 03.760.510/0001-55</p>
        <p>Escaneie com o app do seu banco para doar via Pix.</p>
      </QRContainer>
    </Section>
  );
}
