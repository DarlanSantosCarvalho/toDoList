"use client";
import Link from "next/link";
import "./page.css";
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
    const botao = document.querySelector(".botaoAcesso")
    if (nomeDeUsuario === "adm" && senha === "admin123") {
      alert("Login bem-sucedido!");
    } else {
      alert("Senha ou usuário incorreto")
      botao.style.pointerEvents = "none"
    }
  };

  return (
    <body>
      <div className="container-login">
        <label htmlFor="Nome de usuário">Nome de usuário</label>
        <input placeholder="Nome de usuário" type="text" />
        <label htmlFor="Senha">Senha</label>
        <input onBlur={checkLogin} placeholder="Senha" type="password" />
        <button className="botaoAcesso">
          <Link href="/tarefas">Acessar</Link>
        </button>
      </div>
    </body>
  );
};

export default LoginPage;
