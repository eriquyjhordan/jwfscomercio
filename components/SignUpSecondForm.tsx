import Head from "next/head";
import React from "react";
import Button from "./Button";
import Input from "./Input";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/index";

import {
  setPhone,
  setEmail,
  setPassword,
  setConfirmPassword,
} from "../redux/signUp.store";

export default function SignUpSecondForm() {
  const dispatch = useDispatch();
  const signUp = useSelector((state: RootState) => state.signUp);


  function handleSubmit(event: any) {
    event.preventDefault();
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
        onChange={({ target }) => dispatch(setPassword(target.value))}
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
      <Button
        text="Cadastrar"
        backgroundColor="#0072D2"
        color="#F9F9F9"
        fontWeight="normal"
        marginTop="6rem"
        onClick={(e) => handleSubmit(e)}
      />
    </form>
  );
}