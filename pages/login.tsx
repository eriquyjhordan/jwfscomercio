import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from '../styles/login.module.css';

import loginIllustrator from '../public/images/login-illustrator.png';
import Input from "../components/Input";
import Link from "next/link";
import Button from "../components/Button";

export default function Login() {


  return (
    <div className={styles.wrapper}>
      <Head>
        <style>
          {`
            body {
              background: linear-gradient(0deg, #060918 10.94%, #14253D 85%) !important;
            }
          `}
        </style>
      </Head>
      <h1 className={styles.illustration}>
        <Image src={loginIllustrator} alt="Login Illustrator" width={236} height={172} />
      </h1>
      <Input
        placeholder="Digite seu e-mail"
        label="Use seu e-mail"
        name="email"
        type="email"
        marginTop="5.6rem"
      />
      <Input
        placeholder="Digite sua senha"
        label="Use sua senha"
        name="password"
        type="password"
        marginTop="2.4rem"
      />
      <Link href="/" className={styles.forgotPassword}>
        Esqueceu sua senha?
      </Link>
      <Button
        text="Entrar"
        fontWeight="bold"
        backgroundColor="#0072D2"
        color="#f9f9f9"
      />
      <Link href="/" className={styles.createAnAccout}>
        Não tem uma conta? Crie aqui
      </Link>
    </div>
  );
}
