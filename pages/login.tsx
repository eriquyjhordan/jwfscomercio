import Head from "next/head";
import Image from "next/image";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

import styles from '../styles/login.module.css';

import { supabase } from "../service/supabaseClient";

import loginIllustrator from '../public/images/login-illustrator.png';
import Input from "../components/Input";
import Link from "next/link";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const notify = (message: string) => toast.error(message);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    try {
      const { data: { session }, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      localStorage.setItem('session', JSON.stringify(session));
      if (error) {
        notify("E-mail ou senha incorretos");
        setLoading(false);
      }
    } catch (error) {
      console.log('there was an error');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className={styles.desktop}>
        <h1>Desculpe este site está disponível somente para celulares...</h1>
        <h2>Em breve teremos a versão para computadores</h2>
      </div>
      <form className={`${styles.wrapper} ${styles.mobile}`}>
        <Head>
          <style>
            {`
            body {
              background: linear-gradient(0deg, #060918 10.94%, #14253D 85%) !important;
              height: 100vh;
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Digite sua senha"
          label="Use sua senha"
          name="password"
          type="password"
          marginTop="2.4rem"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Link href="/" className={styles.forgotPassword}>
          Esqueceu sua senha?
        </Link>
        <Button
          text={loading ? <ClipLoader color="#f9f9f9" size={20} /> : 'Entrar'}
          fontWeight="bold"
          backgroundColor="#0072D2"
          color="#f9f9f9"
          onClick={handleSubmit}
          disabled={loading}
          type="submit"
        />
        <Link href="/sign-up" className={styles.createAnAccout}>
          Não tem uma conta? Crie aqui
        </Link>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{
            fontSize: '1.6rem',
          }}
        />
      </form>
    </>
  );
}
