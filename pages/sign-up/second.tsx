import React from "react";

import Head from "next/head";
import Image from "next/image";

import styles from '../../styles/signup.module.css';

import jwfsLogo from '../../public/jwfs-logo.png';
import SignUpSecondForm from "../../components/SignUpSecondForm";

export default function Signup() {
  return (
    <>
      <Head>
        <style>
          {`
            body {
              background: linear-gradient(0deg, #060918 10.94%, #14253D 85%) no-repeat !important;
              background-size: cover;
            }
          `}
        </style>
      </Head>
      <div className={styles.desktop}>
        <h1>Desculpe este site está disponível somente para celulares...</h1>
        <h2>Em breve teremos a versão para computadores</h2>
      </div>
      <div className={`${styles.wrapper} ${styles.mobile}`}>
        <h1 className={styles.logo}>
          <Image src={jwfsLogo} alt="jwfs Logo" width={130} height={68} priority />
        </h1>
        <SignUpSecondForm />
      </div>
    </>
  );
}