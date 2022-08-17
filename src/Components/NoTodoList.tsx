import style from "./NoTodoList.module.css"

export function NoTodoList() {
    return (
        <div className={style.noTodoContent}>
            <strong>Você ainda não tem terefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
};