import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/index";
import {
  setFullname,
  setZipcode,
  setIsConsultCep,
  setAddress,
  clearAddress,
  setStreet,
  setNeighborhood,
  setCity,
  setState,
} from "../redux/signUp.store";

import Head from "next/head";
import Image from "next/image";

import cepPromisse from 'cep-promise';

import styles from '../styles/signup.module.css';

import jwfsLogo from '../public/jwfs-logo.png';
import Input from "../components/Input";
import Button from "../components/Button";

export default function Signup() {
  const dispatch = useDispatch();
  const signUp = useSelector((state: RootState) => state.signUp);

  useEffect(() => {
    if (signUp.zipcode !== '' && !(signUp.zipcode.split('-')[0].includes('_') || signUp.zipcode.split('-')[1].includes('_'))) {
      dispatch(setIsConsultCep(true));
      cepPromisse(signUp.zipcode)
        .then((response) => {
          dispatch(setAddress({
            street: response.street,
            neighborhood: response.neighborhood,
            city: response.city,
            state: response.state,
          }));
          document.getElementById('number')?.focus();
        })
        .catch((error) => {
          dispatch(setIsConsultCep(false));
          dispatch(clearAddress());
          console.log(error.errors);
        })
        .finally(() => {
          dispatch(setIsConsultCep(false));
        })
    }
  }, [signUp.zipcode])
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
          <Image src={jwfsLogo} alt="jwfs Logo" width={130} height={68} priority />
        </h1>
        <form className={`${styles.form} ${styles.fistForm}`}>
          <Input
            label="Nome Completo"
            type="text"
            placeholder="Digite seu nome completo"
            name="fullName"
            value={signUp.fullname}
            onChange={({ target }) => dispatch(setFullname(target.value))}
          />
          <Input
            label="Digite seu CEP"
            type="string"
            placeholder="Digite seu CEP"
            name="cep"
            marginTop="2.4rem"
            value={signUp.zipcode}
            mask="99999-999"
            onChange={(e) => dispatch(setZipcode(e.target.value))}
          />
          <div className={styles.inlineInputs}>
            <Input
              label="Rua"
              type="text"
              placeholder="Digite sua rua"
              name="street"
              marginTop="2.4rem"
              width="23.3rem"
              disable={signUp.isConsultCep}
              value={signUp.isConsultCep ? 'Aguarde consultando cep...' : signUp.street}
              onChange={(e) => dispatch(setStreet(e.target.value))}
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
          <Input
            label="Bairro"
            type="text"
            placeholder="Digite sua bairro"
            name="neighborhood"
            marginTop="2.4rem"
            disable={signUp.isConsultCep}
            value={signUp.isConsultCep ? 'Aguarde consultando cep...' : signUp.neighborhood}
            onChange={(e) => dispatch(setNeighborhood(e.target.value))}
          />
          <div className={styles.inlineInputs}>
            <Input
              label="Cidade"
              type="text"
              placeholder="Digite sua cidade"
              name="city"
              marginTop="2.4rem"
              width="23.3rem"
              disable={signUp.isConsultCep}
              value={signUp.isConsultCep ? 'Aguarde consultando cep...' : signUp.city}
              onChange={(e) => dispatch(setCity(e.target.value))}
            />
            <Input
              label="UF"
              type="text"
              placeholder="UF"
              name="uf"
              marginTop="2.4rem"
              width="8.6rem"
              disable={signUp.isConsultCep}
              value={signUp.isConsultCep ? 'Aguarde consultando cep...' : signUp.state}
              onChange={(e) => dispatch(setState(e.target.value))}
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
            marginTop="4rem"
            type="submit"
            style={{ marginBottom: '10rem' }}
          />
        </form>
        <form className={`${styles.form} ${styles.secondForm}`}>
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
        </form>
      </div>
    </>
  );
}