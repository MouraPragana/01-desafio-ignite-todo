import clipboard from "../Assets/clipboard.svg"

import style from "./NoTodoList.module.css"

export function NoTodoList() {
    return (
        <div className={style.noTodoContent}>
            <img src={clipboard} />
            <strong>Você ainda não tem terefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
};