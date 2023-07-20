import React from 'react';
import "./editor.css";
import Link from 'next/link';
import moment from 'moment';

const dataAtual = moment().format('LL')

const diaSemana = moment().format('dddd')

export default function taskCreator() {
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
                    <input type='text' className='inputEditable' placeholder='Type Here'></input>
                </div>
            </div>

            <button type='submit'>Create Task</button>
        </main>
    )

}
