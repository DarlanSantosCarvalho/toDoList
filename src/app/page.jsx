"use client";
import "./page.css"
import React, { useState } from "react";

const LoginPage = () => {
  const [nomeDeUsuario, setNomedeUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const verificacaoNomeUsuario = (e) => {
    const value = e.target.value;
    setNomedeUsuario(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setSenha(value);
  };

  const checkLogin = () => {
    if (username === "adm" && password === "admin123") {
      alert("Login bem-sucedido!");
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="container-login">
      <label htmlFor="Nome de usuário">Nome de usuário</label>
      <input type="text" />

      <label htmlFor="Senha">Senha</label>
      <input type="password" />
    </div>
  )


};

export default LoginPage;
