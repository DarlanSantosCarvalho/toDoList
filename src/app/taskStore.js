"use client";
import { makeObservable, observable, action } from "mobx";

class TaskStore {
  tasks = [
    {
      id: 1,
      tarefa: "Acordar",
      description: "Aproveitar o dia desde cedo",
    },
    {
      id: 2,
      tarefa: "Academia pela manhã",
      description: "Treino diário",
    },
    {
      id: 3,
      tarefa: "Reunião de desempenho",
      description: "Reunião com executivos da empresa",
    },
    {
      id: 4,
      tarefa: "Entrevista de candidatos",
      description: "Potenciais colaboradores",
    },
    {
      id: 5,
      tarefa: "Leitura do livro Harry Potter",
      description: "Ler das páginas 55 à 80",
    },
  ];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      deleteTask: action,
      editTask: action,
    });
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  editTask(editedTarefa) {
    const index = this.tasks.findIndex((task) => task.id === editedTarefa.idTask);

    if (index !== -1) {
      this.tasks[index] = {
        ...this.tasks[index],
        tarefa: editedTarefa.tarefa,
        description: editedTarefa.description,
      };
    }
  }
}

const store = new TaskStore();
export default store;
