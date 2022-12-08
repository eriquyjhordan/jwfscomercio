import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from '../styles/emailVerification.module.css';

import mailVerificationIllustration from '../public/images/mail-verification-illustration.png';
import outlookButton from '../public/images/outlook-button.png';
import gmailButton from '../public/images/gmail-button.png';
import whatsappButton from '../public/images/whatsapp-button.png';

export default function EmailVerification() {
  return (
    <>
      <Head>
        <style>
          {`
            body {
              background: linear-gradient(0deg, #060918 10.94%, #14253D 85%);
            }
          `}
        </style>
      </Head>
      <div className={styles.desktop}>
        <h1>Desculpe este site está disponível somente para celulares...</h1>
        <h2>Em breve teremos a versão para computadores</h2>
      </div>
      <div className={`${styles.wrapper} ${styles.mobile}`}>
        <div className={styles.illustration}>
          <Image src={mailVerificationIllustration.src} alt="Email verification illustration" width={236} height={164} />
          <p className={styles.warninText} style={{ marginTop: '8.6rem' }}>Por segurança enviamos um link de verificação para seu e-mail.</p>
          <p className={styles.warninText} style={{ marginBottom: '3rem' }}>Abra seu e-mail</p>
        </div>
        <Link href="/">
          <Image src={outlookButton} alt="Outlook button" className={styles.imageButton} />
        </Link>
        <Link href="/">
          <Image src={gmailButton} alt="Gmail button" className={styles.imageButton} />
        </Link>
        <p className={styles.needHelpTitle}>Precisa de Ajuda?</p>
        <span className={styles.needHelpDescription}>Entre em contato através do <br /> WhatsApp</span>
        <Link href='/'>
          <Image src={whatsappButton} alt="Whatsapp button" className={styles.imageButton} />
        </Link>
      </div>
    </>
  )
}