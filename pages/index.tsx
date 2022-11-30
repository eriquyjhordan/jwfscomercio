import styles from '../styles/Index.module.css';
import Image from 'next/image';
import backgroundImage from '../public/images/background.webp';
import jwfsLogo from '../public/jwfs-logo.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Image className={styles.backgroundImage} src={backgroundImage} alt="background image" />
      <h1 className={styles.title}>Os melhores conteúdos <br /> em um só lugar</h1>
      <Image className={styles.logo} src={jwfsLogo} alt="logo" />
    </div>
  );
}
