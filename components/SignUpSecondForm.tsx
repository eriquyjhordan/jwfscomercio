import Head from "next/head";
import React from "react";
import Button from "./Button";
import Input from "./Input";

import styles from "./sytles/secondForm.module.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/index";

import { supabase } from "../service/supabaseClient";

import {
  setPhone,
  setEmail,
  setPassword,
  setConfirmPassword,
} from "../redux/signUp.store";
import { useRouter } from "next/router";

export default function SignUpSecondForm() {
  const dispatch = useDispatch();
  const signUp = useSelector((state: RootState) => state.signUp);
  const routes = useRouter();
  const [error, setError] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [requirements, setRequirements] = React.useState({
    length: false,
    capitalLetter: false,
    lowercaseLetter: false,
    number: false,
    specialChar: false,
  });

  function handleCreatePassword(password: string) {
    dispatch(setPassword(password));
    setError('');
    setRequirements({
      length: password.length >= 8,
      capitalLetter: /[A-Z]/.test(password),
      lowercaseLetter: /[a-z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[@$!%*?&]/.test(password),
    });

  }

  function handleBlur(event: any) {
    setFocused(false);
    if (!requirements.length) {
      setError('A senha não é válida');
    }
  }


  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: signUp.email,
        password: signUp.password,
        options: {
          data: {
            fullname: signUp.fullname,
            zipcode: signUp.zipcode,
            city: signUp.city,
            neighborhood: signUp.neighborhood,
            state: signUp.state,
            street: signUp.street,
            complement: signUp.complement,
            number: signUp.number,
            phone: signUp.phone,
          }
        }
      });
      routes.push("/emailVerification");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form>
      <Head>
        <style>
          {`
            body {
              height: 100vh;
            }
          `}
        </style>
      </Head>
      <Input
        label="Telefone*"
        type="text"
        placeholder="Digite seu telefone"
        name="phone"
        marginTop="4rem"
        mask="+55 (99) 99999-9999"
        required
        value={signUp.phone}
        onChange={({ target }) => dispatch(setPhone(target.value))}
      />
      <Input
        label="E-mail*"
        type="email"
        placeholder="Digite seu e-mail"
        name="email"
        marginTop="2.4rem"
        required
        value={signUp.email}
        onChange={({ target }) => dispatch(setEmail(target.value))}
      />
      <Input
        label="Senha*"
        type="password"
        placeholder="Digite sua senha"
        name="password"
        marginTop="2.4rem"
        required
        value={signUp.password}
        onChange={({ target }) => handleCreatePassword(target.value)}
        onBlur={handleBlur}
        onFocus={() => setFocused(true)}
        style={{ border: error ? '1px solid red' : '' }}
      />
      <Input
        label="Confirme sua senha*"
        type="password"
        placeholder="Confirme sua senha"
        name="confirmPassword"
        marginTop="2.4rem"
        required
        value={signUp.confirmPassword}
        onChange={({ target }) => dispatch(setConfirmPassword(target.value))}
      />
      <div className={styles.requirements}>
        {error && <p className={styles.hasAnError}>{error}</p>}
        {focused && (
          <ul className={styles.requirementsList}>
            <li className={styles.requirement}>
              Deve conter 8 caracteres: {requirements.length ? '✔️' : '❌'}
            </li>
            <li className={styles.requirement}>
              Pelo menos uma letra maiúscula: {requirements.capitalLetter ? '✔️' : '❌'}
            </li>
            <li className={styles.requirement}>
              Pelo menos uma letra minuscula: {requirements.lowercaseLetter ? '✔️' : '❌'}
            </li>
            <li className={styles.requirement}>Deve conter um número: {requirements.number ? '✔️' : '❌'}</li>
            <li className={styles.requirement}>
              Deve conter um caractere especial: {requirements.specialChar ? '✔️' : '❌'}
            </li>
          </ul>
        )}
      </div>
      <Button
        text="Cadastrar"
        backgroundColor="#0072D2"
        color="#F9F9F9"
        fontWeight="normal"
        marginTop="6rem"
        onClick={(e) => handleSubmit(e)}
        type="submit"
      />
    </form>
  );
}