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

  editTask(editedTask) {
    const index = this.tasks.findIndex((task) => task.id === editedTask.id);

    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...editedTask };
    }
  }
}

const store = new TaskStore();
export default store;
