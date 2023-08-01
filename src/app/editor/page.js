'use client'
import React, { useState, useEffect, use } from 'react';
import "./editor.css";
import Link from 'next/link';
import moment from 'moment';
import { observer } from 'mobx-react';
import store from "../taskStore"
import "../responsive.css";

const dataAtual = moment().format('LL')

const diaSemana = moment().format('dddd')

const taskEditor = observer(({ task }) => {


    const [tarefa, setTarefa] = useState('');
    const [tarefaEdited, setTarefaEdited] = useState('');
    const [textId, setTextId] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const paramsTaskId = urlParams.get("id");
        const textTarefa = store.tasks.find((task) => task.id === Number(paramsTaskId));

        setTarefa(textTarefa.tarefa);
        setTextId(paramsTaskId)
    }, []);

    const handleTypeEditTarefa = (e) => setTarefaEdited(e.target.value)

    const handleClickToSaveEdit = () => {
        if (textId) {
            if (tarefaEdited.trim() === '') {
                alert("Não houve alteração na tarefa.");
            } else {
                const editedTarefa = { idTask: Number(textId), tarefa: tarefaEdited.trim() };
                store.editTask(editedTarefa);
                console.log(tarefaEdited);
                console.log(store.tasks);
                alert("Sua tarefa foi editada.");
            }
        } else {
            alert('Erro');
        }
    };

    return (
        <main>
            <div className="backTo">
                <Link href="/"><img src="/proximoBlack.svg" alt="Ícone de próximo" /></Link>
                <h1>Edit Task</h1>
            </div>

            <div class="container-editor">
                <div className='criarTask'>
                    <span className='titleInput'>Task title</span>
                    <img className="sticker" src="/verdadeiro.svg"></img>
                    <input value={tarefaEdited} onChange={handleTypeEditTarefa} type='text' className='inputEditable' placeholder={tarefa}></input>
                </div>
            </div>

            <button className='editorButton' onClick={handleClickToSaveEdit} type='submit'>Edit Task</button>
        </main >
    )
})

export default taskEditor