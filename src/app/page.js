'use client'
import React, { useState } from 'react';
import './responsive.css';
import './page.css';
import moment from 'moment/moment';
import Link from 'next/link';
import { observer } from 'mobx-react';
import store from "./taskStore"

const dataAtual = moment().format('LL');
const diaSemana = moment().format('dddd');

const Home = observer(() => {

  const handleDeleteTask = (taskId) => {
    store.deleteTask(taskId);
    alert(`Tarefa removida`)
  }

  const handleClickDelete = (taskId) => {
    if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
      handleDeleteTask(taskId);
    }
  };

  const { tasks } = store

  const [taskCompleted, setTaskCompleted] = useState([])

  const handleClickTaskCompleted = (idTask) => {
    // Verifica se a tarefa com o ID "taskId" está presente no estado "TaskCompleted"
    const isTaskCompleted = taskCompleted.includes(idTask)

    //Caso a tarefa já esteja concluída, será removida do estado taskCompleted
    if (isTaskCompleted) {
      setTaskCompleted(taskCompleted.filter((id) => id !== idTask))

      //Caso não esteja concluída, ao clicar, ela será concluída, entrando ao estado "TaskCompleted"
    } else {
      setTaskCompleted([...taskCompleted, idTask]);
    }
  }

  return (
    <main>
      <nav>
        <div className='data'>
          <h2 className='diaSemana'>{diaSemana}</h2>
          <p className='dataAtual'>{dataAtual}</p>
        </div>
        <div className='profilePic'>
          <img src='https://placekitten.com/80/80' alt='Profile' />
        </div>
      </nav>

      <div className='info'>
        <h2 className='info-text'>Task List</h2>

        <p className='counter-text'>Contador {taskCompleted.length}/{tasks.length}</p>
      </div>

      <div className='container'>
        {tasks.map((task) => (
          <div style={{
            background: taskCompleted.includes(task.id) ?
              'linear-gradient(136deg, #7F00FF 0%, #E100FF 100%)' : ' rgba(250, 250, 250, 1)',
            border: taskCompleted.includes(task.id) ?
              'none' : '2px solid rgb(156, 156, 156)',
            boxShadow: taskCompleted.includes(task.id) ?
              '4px 12px 20px 4px rgba(225, 0, 255, 0.21)' : 'none'
          }} className='container-tasks' key={task.id}>
            <span
              style={{
                display: taskCompleted.includes(task.id) ?
                  'block' : 'none'
              }}
              className="delete-button"
              onClick={() => handleClickDelete(task.id)}>
              <img className='trash-delete' src='/trash.svg' />
            </span>
            <input
              checked={taskCompleted.includes(task.id)}
              onChange={() => handleClickTaskCompleted(task.id)}
              className='caixaCheck'
              type='checkbox'></input>
            <p style={{ color: taskCompleted.includes(task.id) ? '#ffffff' : '#262626' }} className='text-task'>{task.tarefa}</p>
            <Link href="/editor"><img className="edit" fill={taskCompleted.includes(task.id) ? '#ffffff' : '#262626'} src="/proximo.svg" alt="Ícone de próximo" /></Link>
          </div>
        ))}
      </div>

      <button>
        <Link href='/creator'>Create Task</Link>
      </button>
    </main>
  );
});

export default Home;
