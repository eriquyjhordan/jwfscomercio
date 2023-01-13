import Head from "next/head";
import React from "react";
import Button from "./Button";
import Input from "./Input";

import { ClipLoader } from 'react-spinners';
import * as Yup from 'yup';

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
  const [loading, setLoading] = React.useState(false);
  const [formError, setError] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [requirements, setRequirements] = React.useState({
    length: false,
    capitalLetter: false,
    lowercaseLetter: false,
    number: false,
    specialChar: false,
  });

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
    .required('Fullname is required')
    .matches(/^[a-zA-Z ]{5,}(?=.*\s)$/, "O nome completo deve conter um espaço, não conter números ou caracteres especiais e ter pelo menos 5 caracteres"),
    email: Yup.string().email('Email invalido').required('Email é obrigatório'),
    zipcode: Yup.string().matches(/^\d{5}-?\d{3}$|^\d{8}$/, 'CEP é inválido').required('CEP é obrigatório'),
    city: Yup.string().min(5, 'A cidade deve conter no minimo 5 caracteres').required('Cidade é obrigatória'),
    neighborhood: Yup.string().required('Bairro é obrigatório'),
    state: Yup.string().min(5, 'O Estado deve conter no minimo 2 caracteres').required('Estado é obrigatório'),
    street: Yup.string().min(5, 'Rua deve conter no minimo 5 caracteres').required('Rua é obrigatória'),
    number: Yup.number().positive().integer().required('O número é obrigatório'),
    phone: Yup.string()
    .required('O telefone é obrigatório')
    .matches(/^\+55\s\(\d{2}\)\s\d{5}-\d{4}$/, "O telefone deve estar no formato +55 (99) 99999-9999"),
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

  function validateForm() {
    setLoading(true);
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailRegex.test(signUp.email)) {
      setError('O e-mail não é válido');
      setLoading(false);
    }
    if (signUp.password !== signUp.confirmPassword) {
      setError('As senhas não são iguais');
      setLoading(false);
    }
    if (signUp.phone.length < 14) {
      setError('O telefone não é válido');
      setLoading(false);
    }
    if (signUp.fullname.split(' ').length < 2) {
      setError('O nome não é válido');
      setLoading(false);
    }
    if (signUp.zipcode.length < 9) {
      setError('O CEP não é válido');
      setLoading(false);
    }
    if (signUp.city.length < 3) {
      setError('A cidade não é válida');
      setLoading(false);
    }
    if (signUp.neighborhood.length < 3) {
      setError('O bairro não é válido');
      setLoading(false);
    }
    if (signUp.state.length < 2) {
      setError('O estado não é válido');
      setLoading(false);
    }
    if (signUp.street.length < 3) {
      setError('A rua não é válida');
      setLoading(false);
    }
    if (signUp.number.length < 1) {
      setError('O número não é válido');
      setLoading(false);
    }
  }


  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    try {
      validateForm();
      if(formError.length > 0) {
        setLoading(false);
        throw new Error(formError);
      }
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
      setLoading(false);
      console.log(data);
    } catch (formError) {
      console.log(formError);
      setLoading(false);
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
        style={{ border: formError ? '1px solid red' : '' }}
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
        {formError && <p className={styles.hasAnError}>{formError}</p>}
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
        text={loading ? <ClipLoader color="#f9f9f9" size={20} /> : 'Cadastrar'}
        backgroundColor={ formError.length > 0 ? '#7d8b9697' : '#0072D2'}
        color="#F9F9F9"
        fontWeight="normal"
        marginTop="6rem"
        onClick={(e) => handleSubmit(e)}
        type="submit"
        disabled={ formError.length > 0}
      />
    </form>
  );
}