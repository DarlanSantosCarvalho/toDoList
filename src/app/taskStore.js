'use client'
import { makeObservable, observable, action } from 'mobx';

class TaskStore {
  tasks = [
    { id: 1, tarefa: 'Tarefa 1' },
    { id: 2, tarefa: 'Tarefa 2' },
    { id: 3, tarefa: 'Tarefa 3' },
    { id: 4, tarefa: 'Tarefa 4' },
    { id: 5, tarefa: 'Tarefa 5' },
  ];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      editTask: action,
    });
  }

  addTask(task) {
    this.tasks.push(task);
  }

  editTask(editedTask) {
    const index = this.tasks.findIndex((task) => task.id === editedTask.id);
    if (index !== -1) {
      this.tasks[index] = editedTask;
    }
  }
}

const store = new TaskStore();
export default store;
