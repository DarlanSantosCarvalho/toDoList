"use client";
import React, { useState } from "react";
import "src/app/responsive.css";
import "./page.css";
import moment from "moment/moment";
import Link from "next/link";
import { observer } from "mobx-react";
import store from "./taskStore";

const dataAtual = moment().format("LL");
const diaSemana = moment().format("dddd");

const Tarefas = observer(() => {
  const handleClickDelete = (taskId) => {
    if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
      handleDeleteTask(taskId);
    }
  };

  const handleDeleteTask = (taskId) => {
    store.deleteTask(taskId);
    alert(`Tarefa removida`);
  };

  const { tasks } = store;

  const [taskCompleted, setTaskCompleted] = useState([]);

  const handleClickTaskCompleted = (idTask) => {
    // Verifica se a tarefa com o ID "taskId" está presente no estado "TaskCompleted"
    const isTaskCompleted = taskCompleted.includes(idTask);

    //Caso a tarefa já esteja concluída, será removida do estado taskCompleted
    if (isTaskCompleted) {
      setTaskCompleted(taskCompleted.filter((id) => id !== idTask));

      //Caso não esteja concluída, ao clicar, ela será concluída, entrando ao estado "TaskCompleted"
    } else {
      setTaskCompleted([...taskCompleted, idTask]);
    }
  };

  return (
    <main>
      <nav>
        <div className="data">
          <h2 className="diaSemana">{diaSemana}</h2>
          <p className="dataAtual">{dataAtual}</p>
        </div>
        <div className="profilePic">
          <img src="/profilePic.png" alt="Profile" />
        </div>
      </nav>

      <div className="info">
        <h2 className="info-text">Lista de afazeres</h2>

        <p className="counter-text">
          {taskCompleted.length}/{tasks.length} Tarefas completas
        </p>
      </div>

      <div className="container">
        {tasks.map((task) => (
          <div
            style={{
              background:
                task && taskCompleted.includes(task.id)
                  ? "linear-gradient(136deg, #7F00FF 0%, #E100FF 100%)"
                  : "rgba(250, 250, 250, 1)",
              border:
                task && taskCompleted.includes(task.id)
                  ? "none"
                  : "2px solid rgb(156, 156, 156)",
              boxShadow:
                task && taskCompleted.includes(task.id)
                  ? "4px 12px 20px 4px rgba(225, 0, 255, 0.21)"
                  : "none",
            }}
            className="container-tasks"
            key={task.id}
          >
            <span
              style={{
                display:
                  task && taskCompleted.includes(task.id) ? "none" : "block",
              }}
              className="delete-button"
              onClick={() => handleClickDelete(task.id)}
            >
              <img className="trash-delete" src="/botao-excluir.svg" />
            </span>
            <input
              checked={task && taskCompleted.includes(task.id)}
              onChange={() => handleClickTaskCompleted(task.id)}
              className="caixaCheck"
              type="checkbox"
            ></input>
            <div class="tituloDesc">
              <p
                style={{
                  color:
                    task && taskCompleted.includes(task.id)
                      ? "#ffffff"
                      : "#262626",
                }}
                className="text-task"
              >
                {task.tarefa}
              </p>
              <description>{task.description}</description>
            </div>
            <p
              style={{
                color:
                  task && taskCompleted.includes(task.id)
                    ? "#ffffff"
                    : "#262626",
              }}
              className="idTask"
            >
              {task.id}
            </p>
            <Link href={`/Editor?id=${task.id}`}>
              <img
                className="edit"
                src={
                  taskCompleted.includes(task.id)
                    ? "/proximoWhite.svg"
                    : "/proximoBlack.svg"
                }
                alt="Indicação para editar a tarefa"
              />
            </Link>
          </div>
        ))}
      </div>

      <button className="mainButton">
        <Link href="/Creator">Criar tarefa</Link>
      </button>
    </main>
  );
});

export default Tarefas;
