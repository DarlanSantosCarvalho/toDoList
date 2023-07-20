'use client'
import React, { useState } from 'react'
import './page.css'
import moment from 'moment/moment'

const dataAtual = moment().format('LL')

const diaSemana = moment().format('dddd')

function Home() {

  const [task, setTasks] = useState([
    {
      id: 1,
      text: "Wake Up!",
    },
    {
      id: 2,
      text: "Daily workout",
    },
    {
      id: 3,
      text: "Briefing with Lokanaka",
    },
    {
      id: 5,
      text: "Pitching with John",
    },
    {
      id: 5,
      text: "Design Landing Page",
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


      {task.map((tasks) => (
        <div className='container-tasks'>
          <input type='checkbox'></input>
          <p className='text-task'>{tasks.text}</p>
          <img className="edit" src="https://placekitten.com/30/30" alt="Ícone de próximo"></img>
        </div>
      ))}

      <button>Create Task</button>
    </main>
  )
}

export default Home
