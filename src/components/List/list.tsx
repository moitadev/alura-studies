import React from "react";
import style from './list.module.scss'

function List() {
    const tasks = [{
        task: 'React',
        tempo: '02:00:00'
    }, {
        task: "Javascript",
        tempo: "01:00:00"
    }, {
        task: "Typescript",
        tempo: "03:00:00"
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>{item.task}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;