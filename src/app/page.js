'use client'
import React, { useEffect, useState} from 'react'
import "./responsive.css";
import './page.css'
import moment from 'moment/moment'
import Link from 'next/link'

const dataAtual = moment().format('LL')

const diaSemana = moment().format('dddd')

export default function Home() {

  useEffect(() => {
    addTask();
  }, [])

  const addTask = () => {
    const newTask = {
      id: task.length + 1,
      text: "Olá mundo"
    };
    console.log("Nova tarefa adicionada")
    setTasks([...task, newTask]); // Atualiza o estado com a nova tarefa adicionada
  };

  const [task, setTasks] = useState([
    {
      id: 1,
      text: "Wake Up!"
    },
    {
      id: 2,
      text: "Daily workout"
    },
    {
      id: 3,
      text: "Briefing with Lokanaka"
    },
    {
      id: 4,
      text: "Pitching with John"
    },
    {
      id: 5,
      text: "Design Landing Page"
    }
  ])

  const [taskCompleted, setTaskCompleted] = useState([])

  const handleClickTaskCompleted = (taskId) => {
    // Verifica se a tarefa com o ID "taskId" está presente no estado "TaskCompleted"
    const isTaskCompleted = taskCompleted.includes(taskId)

    //Caso a tarefa já esteja concluída, será removida do estado taskCompleted
    if (isTaskCompleted) {
      setTaskCompleted(taskCompleted.filter((id) => id !== taskId))

      //Caso não esteja concluída, ao clicar, ela será concluída, entrando ao estado "TaskCompleted"
    } else {
      setTaskCompleted([...taskCompleted, taskId]);
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
          <img src='https://placekitten.com/80/80'></img>
        </div>
      </nav>

      <div className='info'>
        <h2 className='info-text'>Task List</h2>

        <p className='counter-text'>Contador {taskCompleted.length}/{task.length}</p>
      </div>
      {task.map((tasks) => (
        <div key={tasks.id} id='container' className='container-tasks'>
          <div class="caixaCheck">
            <input
              type='checkbox'
              checked={taskCompleted.includes(tasks.id)}
              onChange={() => handleClickTaskCompleted(tasks.id)}></input>
          </div>
          <p id='textContainer' className='text-task'>{tasks.text}</p>
          <Link href="/editor"><img className="edit" src="/proximo.svg" alt="Ícone de próximo" /></Link>
        </div>
      ))}
      <button>
        <Link href="/creator">Create Task</Link>
      </button>
    </main>
  )
}
