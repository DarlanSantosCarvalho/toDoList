"use client";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import store from "../taskStore";
import "../responsive.css";
import "./creator.css";
import Link from "next/link";
import moment from "moment";

const dataAtual = moment().format("LL");
const diaSemana = moment().format("dddd");

const TaskCreator = observer(() => {
  const [tarefa, setTarefa] = useState("");
  const [description, setDescription] = useState("");

  const handleTypeCreateTarefa = (e) => setTarefa(e.target.value);

  const handleTypeCreateDescription = (e) => setDescription(e.target.value);

  const handleSendCreatedTask = () => {
    if (tarefa == "") {
      alert("Não é possível adicionar uma tarefa vazia");
    } else {
      const newTask = { id: store.tasks.length + 1, tarefa, description };
      store.addTask(newTask);
      setTarefa("");
      alert("Sua tarefa foi adicionada");
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(store.tasks));
  }, [store.tasks]); // A cada vez que ocorrer uma alteração no store, será gravado no local storage.

  return (
    <main>
      <div className="backTo">
        <Link href="/">
          <img src="/proximoBlack.svg" alt="Ícone de próximo" />
        </Link>
        <h1>Crie sua tarefa</h1>
      </div>

      <div class="container-creator">
        <div className="criarTask">
          <span className="titleInput">Nome da tarefa</span>
          <img className="sticker" src="/verdadeiro.svg"></img>

          <input
            value={tarefa}
            onChange={handleTypeCreateTarefa}
            type="text"
            className="inputEditable"
            placeholder="Type Here"
          ></input>
        </div>
      </div>

      <div class="container-description">
        <div className="criarTask">
          <span className="titleInput">Descrição da tarefa</span>
          <img className="sticker" src="/verdadeiro.svg"></img>

          <input
            value={description}
            onChange={handleTypeCreateDescription}
            type="text"
            className="inputEditable"
            placeholder="Type Here"
          ></input>
        </div>
      </div>

      <button
        className="creatorButton"
        onClick={handleSendCreatedTask}
        type="submit"
      >
        Criar tarefa
      </button>
    </main>
  );
});

export default TaskCreator;
