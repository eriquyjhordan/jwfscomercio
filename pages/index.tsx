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
    <div className={styles.container}>
      <Image className={styles.backgroundImage} src={backgroundImage} alt="background image" />
      <h1 className={styles.title}>Os melhores conteúdos <br /> em um só lugar</h1>
      <Image className={styles.logo} src={jwfsLogo} alt="logo" />
      <Link href='' className={styles.signButton}>Assine agora</Link>
      <span className={styles.valueText}>R$ 30,00/mês ou R$ 299/ano à vista*</span>
      <Image src={tveExpress} className={styles.tveExpress} alt="tve express" />
      <Image src={myFamilyCinema} className={styles.myFamilyCinema} alt="my family cinema" />
      <Image src={mundoKids} className={styles.mundoKids} alt="mundo kids" />
      <Image src={youtubePremium} className={styles.youtubePremium} alt="youtube premium" />

    </div>
  );
}
