'use client'
import React, { useState } from 'react'
import "./responsive.css";
import './page.css'
import moment from 'moment/moment'
import Link from 'next/link'

const dataAtual = moment().format('LL')

const diaSemana = moment().format('dddd')

export default function Home() {

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

        <p className='counter-text'>Contador 2/{task.length}</p>
      </div>
      {task.map((tasks) => (
        <div key={tasks.id} className='container-tasks'>
          <div class="caixaCheck">
            <input type='checkbox'></input>
          </div>
          <p className='text-task'>{tasks.text}</p>
          <Link href="/editor"><img className="edit" src="/proximo.svg" alt="Ícone de próximo" /></Link>
        </div>
      ))}

      <button>
        <Link href="/creator">Create Task</Link>
      </button>
    </main>
  )
}
