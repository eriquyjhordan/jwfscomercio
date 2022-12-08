import styles from '../styles/Index.module.css';
import Image from 'next/image';
import backgroundImage from '../public/images/background.webp';
import jwfsLogo from '../public/jwfs-logo.png';
import tveExpress from '../public/images/tve-express.webp';
import tveLogo from '../public/images/tve-express-logo.webp';
import myFamilyCinema from '../public/images/my-family-cinema.png';
import mundoKids from '../public/images/mundo-kids.webp';
import youtubePremium from '../public/images/youtube-premium.webp';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={styles.desktop}>
        <h1>Desculpe este site está disponível somente para celulares...</h1>
        <h2>Em breve teremos a versão para computadores</h2>
      </div>
      <div style={{
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
        </div>
      </div>
    </>
  );
}
