'use client'
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import store from '../taskStore';
import "./creator.css"
import Link from 'next/link';
import moment from 'moment';


const dataAtual = moment().format('LL');
const diaSemana = moment().format('dddd');

const TaskCreator = observer(() => {
  const [tarefa, setTarefa] = useState('');

  const handleTypeCreateTarefa = (e) => setTarefa(e.target.value);

  const handleSendCreatedTask = () => {
    const newTask = { id: store.tasks.length + 1, tarefa };
    store.addTask(newTask);
    setTarefa('');
    alert("Sua tarefa foi adicionada")
  };

  return (
    <main>
      <div className="backTo">
        <Link href="/"><img src="/proximo.svg" alt="Ícone de próximo" /></Link>
        <h1>Create Task</h1>
      </div>

      <nav>
        <div className='data'>
          <h2 className='diaSemana'>{diaSemana}</h2>
          <p className='dataAtual'>{dataAtual}</p>
        </div>
        <div className='profilePic'>
          <img src='https://placekitten.com/80/80'></img>
        </div>
      </nav>

      <div class="container-creator">
        <div className='criarTask'>
          <span className='titleInput'>Task title</span>
          <img className="sticker" src="/verdadeiro.svg"></img>

          <input value={tarefa}
            onChange={handleTypeCreateTarefa}
            type='text'
            className='inputEditable'
            placeholder='Type Here'></input>
        </div>

      </div>

      <button onClick={handleSendCreatedTask} type='submit'>Create Task</button>
    </main>
  );
});

export default TaskCreator;
