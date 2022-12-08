import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from '../styles/signup.module.css';

import jwfsLogo from '../public/jwfs-logo.png';
import Input from "../components/Input";
import Button from "../components/Button";

export default function Signup() {
  return (
    <>
      <Head>
        <style>
          {`
            body {
              background: linear-gradient(0deg, #060918 10.94%, #14253D 85%) !important;
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
          <Image src={jwfsLogo} alt="jwfs Logo" width={130} height={68} />
        </h1>
        <div className={`${styles.form} ${styles.fistForm}`}>
          <Input
            label="Nome Completo"
            type="text"
            placeholder="Digite seu nome completo"
            name="name"
          />
          <Input
            label="Digite seu CEP"
            type="number"
            placeholder="Digite seu CEP"
            name="cep"
            marginTop="2.4rem"
          />
          <div className={styles.inlineInputs}>
            <Input
              label="Rua"
              type="text"
              placeholder="Digite sua rua"
              name="street"
              marginTop="2.4rem"
              width="23.3rem"
            />
            <Input
              label="Número"
              type="number"
              placeholder="00"
              name="number"
              marginTop="2.4rem"
              width="8.6rem"
            />
          </div>
          <div className={styles.inlineInputs}>
            <Input
              label="Bairro"
              type="text"
              placeholder="Digite sua bairro"
              name="neighborhood"
              marginTop="2.4rem"
              width="23.3rem"
            />
            <Input
              label="UF"
              type="text"
              placeholder="UF"
              name="uf"
              marginTop="2.4rem"
              width="8.6rem"
            />
          </div>
          <Input
            label="Complemento"
            type="text"
            placeholder="Digite um complemento ou ponto de referência"
            name="complement"
            marginTop="2.4rem"
          />
          <Button
            text="Continuar"
            backgroundColor="#0072D2"
            color="#F9F9F9"
            fontWeight="normal"
            marginTop="6rem"
          />
        </div>
        <div className={`${styles.form} ${styles.secondForm}`}>
          <Input
            label="Telefone"
            type="number"
            placeholder="Digite seu telefone"
            name="phone"
          />
          <Input
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            marginTop="2.4rem"
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            name="password"
            marginTop="2.4rem"
          />
          <Input
            label="Confirme sua senha"
            type="password"
            placeholder="Confirme sua senha"
            name="confirmPassword"
            marginTop="2.4rem"
          />
          <Button
            text="Cadastrar"
            backgroundColor="#0072D2"
            color="#F9F9F9"
            fontWeight="normal"
            marginTop="6rem"
          />
        </div>
      </div>
    </>
  );
}