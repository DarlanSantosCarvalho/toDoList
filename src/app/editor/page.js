'use client'
import React, { useState } from 'react';
import "./editor.css";
import Link from 'next/link';
import moment from 'moment';
import { observer } from 'mobx-react';
import store from "../taskStore"

const dataAtual = moment().format('LL')

const diaSemana = moment().format('dddd')

const taskEditor = observer(({ task }) => {

    const [tarefa, setTarefa] = useState(task ? task.tarefa : '')

    const handleTypeEditTarefa = (e) => setTarefa(e.target.value)

    const handleClickToSaveEdit = () => {
        if (task) {
            const editedTask = { id: task.id, tarefa }
            store.editTask(editedTask);
            console.log(editedTask)
            alert("Sua tarefa foi editada")
        } else {
            console.log('Erro')
        }
    }

    return (
        <main>
            <div className="backTo">
                <Link href="/"><img src="/proximo.svg" alt="Ícone de próximo" /></Link>
                <h1>Edit Task</h1>
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
                    <input value={tarefa} onChange={handleTypeEditTarefa} type='text' className='inputEditable' placeholder={task}></input>
                </div>
            </div>

            <button onClick={handleClickToSaveEdit} type='submit'>Edit Task</button>
        </main>
    )
})

export default taskEditor