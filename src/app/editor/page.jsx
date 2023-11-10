"use client";
import React, { useState, useEffect, use } from "react";
import "./editor.css";
import Link from "next/link";
import moment from "moment";
import { observer } from "mobx-react";
import store from "../taskStore";
import "../responsive.css";

const dataAtual = moment().format("LL");

const diaSemana = moment().format("dddd");

const taskEditor = observer(({ tasks }) => {
  const [tarefa, setTarefa] = useState("");
  const [tarefaEdited, setTarefaEdited] = useState("");
  const [textId, setTextId] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionEditada, setDescriptionEditada] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsTaskId = urlParams.get("id");
    const foundTask = store.tasks.find(
      (tasks) => tasks.id === Number(paramsTaskId)
    );

    if (foundTask) {
      setTarefa(foundTask.tarefa);
      setDescription(foundTask.description);
      setTextId(paramsTaskId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(store.tasks));
  }, [store.tasks]);

  const handleTypeEditTarefa = (e) => setTarefaEdited(e.target.value);
  const handleTypeEditDescription = (e) =>
    setDescriptionEditada(e.target.value);

  const handleClickToSaveEdit = () => {
    if (textId) {
      if (tarefaEdited.trim() === "") {
        alert("Não houve alteração na tarefa.");
      } else {
        const editedTarefa = {
          idTask: Number(textId),
          tarefa: tarefaEdited.trim(),
          description: descriptionEditada.trim(),
        };
        store.editTask(editedTarefa);
        console.log(tarefaEdited);
        console.log(descriptionEditada);
        console.log(store.tasks);
        alert("Sua tarefa foi editada.");
      }
    } else {
      alert("Erro");
    }
  };

  return (
    <main>
      <div className="backTo">
        <Link href="/">
          <img src="/proximoBlack.svg" alt="Ícone de próximo" />
        </Link>
        <h1>Editor de tarefas</h1>
      </div>

      <div class="container-editor">
        <div className="criarTask">
          <span className="titleInput">Título da tarefa</span>
          <img className="sticker" src="/verdadeiro.svg"></img>
          <input
            value={tarefaEdited}
            onChange={handleTypeEditTarefa}
            type="text"
            className="inputEditable"
            placeholder={tarefa}
          ></input>
        </div>
      </div>

      <div class="container-editor desc">
        <div className="criarTask">
          <span className="titleInput">Descrição da tarefa</span>
          <img className="sticker" src="/verdadeiro.svg"></img>
          <input
            value={descriptionEditada}
            onChange={handleTypeEditDescription}
            type="text"
            className="inputEditable"
            placeholder={description}
          ></input>
        </div>
      </div>

      <button
        className="editorButton"
        onClick={handleClickToSaveEdit}
        type="submit"
      >
        Editar tarefa
      </button>
    </main>
  );
});

export default taskEditor;
