import styles from '../styles/Index.module.css';
import Image from 'next/image';
import backgroundImage from '../public/images/background.webp';
import jwfsLogo from '../public/jwfs-logo.png';
import tveExpress from '../public/images/tve-express.webp';
import tveLogo from '../public/images/tve-express-logo.webp';
import myFamilyCinema from '../public/images/my-family-cinema.png';
import mundoKids from '../public/images/mundo-kids.webp';
import youtubePremium from '../public/images/youtube-premium.webp';
import tveExample from '../public/images/tve-canais.webp';
import mfcLogo from '../public/images/mfc-logo.webp';
import mfcExample from '../public/images/mfc-example.png';
import mundoKidsLogo from '../public/images/mundo-kids-logo.webp';
import mundoKidsExample from '../public/images/mundo-kids-example.webp';
import smartTubeLogo from '../public/images/smart-tube-logo.webp';
import smartTubeExample from '../public/images/smart-tube-example.webp';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={styles.desktop}>
        <h1>Desculpe este site está disponível somente para celulares...</h1>
        <h2>Em breve teremos a versão para computadores</h2>
      </div>
      <div className={styles.mobile} style={{
        backgroundImage: `url(${backgroundImage.src})`,
        height: '64.5rem',
        width: '43rem',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: -1,
      }}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Os melhores conteúdos <br /> em um só lugar.
          </h2>
          <Image src={jwfsLogo} alt="JWFS" className={styles.logo} />
          <Link href='' className={styles.signButton}>Assine agora</Link>
          <span className={styles.valueText}>R$ 30,00/mês ou R$ 299/ano à vista*</span>
          <div className={styles.images}>
            <Link href=''>
              <Image src={tveExpress} alt="TVE Express" className={styles.tveExpress} />
            </Link>
            <Link href=''>
              <Image src={myFamilyCinema} alt="My Family Cinema" className={styles.mfc} />
            </Link>
            <Link href=''>
              <Image src={mundoKids} alt="Mundo Kids" className={styles.mundoKids} />
            </Link>
            <Link href=''>
              <Image src={youtubePremium} alt="Youtube Premium" className={styles.youtubePremium} />
            </Link>
          </div>
          <div className={styles.knewTheTve}>
            <Image src={tveLogo} alt="TVE Express" className={styles.tveLogo} />
            <span className={styles.knewTheTveText}>Conheça o <br /> Tve Express</span>
          </div>
          <div className={styles.kewTheTveContent}>
            <span className={styles.knewTheTveContentText}>
              TVE Express é uma plataforma de streaming com canais nacionais com os principais canais de filmes, esportes, séries e muito mais. Com muita estabilidade!
            </span>
            <Image src={tveExample} alt="TVE Express" className={styles.tveExample} />
          </div>
          <div className={styles.knewTheMfc}>
            <Image src={mfcLogo} alt="My Family Cinema" className={styles.mfcLogo} />
            <span className={styles.knewTheMfcText}>Conheça o My <br /> Family Cinema</span>
          </div>
          <div className={styles.knewTheMfcContent}>
            <span className={styles.knewTheMfcContentText}>
              My Family Cinema é uma plataforma de streaming com mais de 1.591.934 filmes e séries para toda a família. Contendo os dados de todos os aplicativos de streaming mais populares.
            </span>
            <Image src={mfcExample} alt="My Family Cinema" className={styles.mfcExample} />
          </div>
          <div className={styles.knewTheKidsWorld}>
            <Image src={mundoKidsLogo} alt="Mundo Kids" className={styles.mundoKidsLogo} />
            <span className={styles.knewTheKidsWorldText}>Conheça o <br /> Mundo  Kids</span>
          </div>
          <div className={styles.knewTheKidsWorldContent}>
            <span className={styles.knewTheKidsWorldContentText}>
              O aplicativo Mundo Kids traz canais infantis ao vivo e 24 horas, filmes e desenhos animados, tudo em uma interface simples e prática
            </span>
            <Image src={mundoKidsExample} alt="Mundo Kids" className={styles.mundoKidsExample} />
          </div>
          <div className={styles.knewTheSmartTube}>
            <Image src={smartTubeLogo} alt="Smart Tube" className={styles.smartTubeLogo} />
            <span className={styles.knewTheSmartTubeText}>Conheça o <br /> Smart Tube</span>
          </div>
          <div className={styles.knewTheSmartTubeContent}>
            <span className={styles.knewTheSmartTubeContentText}>
              O aplicativo Smart Tube Next é um YouTube avançado que não contém anúncio e é capaz de pular propagandas dentro de alguns vídeos.
            </span>
            <Image src={smartTubeExample} alt="Smart Tube" className={styles.smartTubeExample} />
          </div>
          <div className={styles.buyNow}>
            <span className={styles.buyNowText}>Adquira agora o acesso a todos aplicativos por apenas
              <br /> <span className={styles.price}>R$ 30,00</span> Mensais</span>
            <div className={styles.signButtonContainer}>
              <Link href='' className={styles.signButton}>Assine agora</Link>
              <span className={styles.valueText}>R$ 30,00/mês ou R$ 299/ano à vista*</span>
            </div>
          </div>
          <div className={styles.footer}>
            <h2>
              <Image src={jwfsLogo} alt="JWFS" className={styles.logo} />
            </h2>
            <div className={styles.footerContent}>
              <p className={styles.footerText}><span className={styles.footerTitle}>Suporte técnico: </span>Atendimento personalizado através do WhatsApp das 9h às 18h</p>
              <p className={styles.footerText}><span className={styles.footerTitle}>E-mail: </span> jwfs.comercio@gmail.com</p>
              <p className={styles.footerText}><span className={styles.footerTitle}>WhatsApp: </span> Não atendemos ligações, para entrar em contato escreva para: +55 27 99981-9941</p>
            </div>
            <p className={styles.footerText} style={{ fontSize: '1.2rem' }}>&copy; Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </>
  );
}
