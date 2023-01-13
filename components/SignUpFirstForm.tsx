import React, { useEffect } from "react";

import cepPromisse from 'cep-promise';
import * as Yup from 'yup';

import Input from "./Input";

import styles from "./sytles/firstForm.module.css";

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
  setComplement,
  setNumber,
} from "../redux/signUp.store";
import Button from "./Button";
import { useRouter } from "next/router";


export default function SignUpFirstForm() {
  const routes = useRouter();
  const dispatch = useDispatch();
  const signUp = useSelector((state: RootState) => state.signUp);
  const firstForm = {
    fullname: signUp.fullname,
    email: signUp.email,
    zipcode: signUp.zipcode,
    city: signUp.city,
    neighborhood: signUp.neighborhood,
    state: signUp.state,
    street: signUp.street,
    number: Number(signUp.number),
  }
  const [formError, setFormError] = React.useState<object[]>([]);

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .required('O nome completo é obrigatório')
      .matches(/^[a-zA-Z ]{5,}(?=.*\s)$/, "O nome completo deve conter um espaço, não conter números ou caracteres especiais e ter pelo menos 5 caracteres"),
    email: Yup.string().email('Email invalido').required('Email é obrigatório'),
    zipcode: Yup.string().matches(/^\d{5}-?\d{3}$|^\d{8}$/, 'CEP é inválido').required('CEP é obrigatório'),
    city: Yup.string().min(5, 'A cidade deve conter no minimo 5 caracteres').required('Cidade é obrigatória'),
    neighborhood: Yup.string().required('Bairro é obrigatório'),
    state: Yup.string().min(5, 'O Estado deve conter no minimo 2 caracteres').required('Estado é obrigatório'),
    street: Yup.string().min(5, 'Rua deve conter no minimo 5 caracteres').required('Rua é obrigatória'),
    number: Yup.number().positive('O número é obrigatório').integer().required('O número é obrigatório'),
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      await validationSchema.validate(firstForm, { abortEarly: false });
      routes.push('/sign-up/second-form');
    } catch (err) {
      const validationErrors = [] as object[];
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          let field = error.path as keyof typeof firstForm;
          validationErrors.push({[field]: error.message});
        });
        setFormError(validationErrors);
      }
      console.log(validationErrors);
    }
  }

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
  }, [signUp.zipcode]);



  return (
    <form>
      <Input
        marginTop="4rem"
        label="Nome Completo*"
        type="text"
        placeholder="Digite seu nome completo"
        name="fullName"
        value={signUp.fullname}
        onChange={({ target }) => dispatch(setFullname(target.value))}
        required={true}
      />
      <Input
        label="Digite seu CEP*"
        type="string"
        placeholder="Digite seu CEP"
        name="cep"
        marginTop="2.4rem"
        value={signUp.zipcode}
        mask="99999-999"
        required
        onChange={(e) => dispatch(setZipcode(e.target.value))}
      />
      <div className={styles.inlineInputs}>
        <Input
          label="Rua*"
          type="text"
          placeholder="Digite sua rua"
          name="street"
          marginTop="2.4rem"
          width="23.3rem"
          required
          disable={signUp.isConsultCep}
          value={signUp.isConsultCep ? 'Aguarde consultando cep...' : signUp.street}
          onChange={(e) => dispatch(setStreet(e.target.value))}
        />
        <Input
          label="Número*"
          type="number"
          placeholder="00"
          name="number"
          marginTop="2.4rem"
          width="8.6rem"
          required
          value={signUp.number}
          onChange={(e) => dispatch(setNumber(e.target.value))}
        />
      </div>
      <Input
        label="Bairro*"
        type="text"
        placeholder="Digite sua bairro"
        name="neighborhood"
        marginTop="2.4rem"
        required
        disable={signUp.isConsultCep}
        value={signUp.isConsultCep ? 'Aguarde consultando cep...' : signUp.neighborhood}
        onChange={(e) => dispatch(setNeighborhood(e.target.value))}
      />
      <div className={styles.inlineInputs}>
        <Input
          label="Cidade*"
          type="text"
          placeholder="Digite sua cidade"
          name="city"
          marginTop="2.4rem"
          width="23.3rem"
          required
          disable={signUp.isConsultCep}
          value={signUp.isConsultCep ? 'Aguarde consultando cep...' : signUp.city}
          onChange={(e) => dispatch(setCity(e.target.value))}
        />
        <Input
          label="UF*"
          type="text"
          placeholder="UF"
          name="uf"
          marginTop="2.4rem"
          width="8.6rem"
          required
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
        value={signUp.complement}
        onChange={(e) => dispatch(setComplement(e.target.value))}
      />
      <Button
        text="Continuar"
        backgroundColor="#0072D2"
        color="#F9F9F9"
        fontWeight="normal"
        marginTop="4rem"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      />
    </form>
  );
}