import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function SignUpSecondForm() {
  return (
    <form>
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
  );
}