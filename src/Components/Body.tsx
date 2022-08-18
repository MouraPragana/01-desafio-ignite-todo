import { NoTodoList } from "./NoTodoList"
import { TodoList } from "./TodoList"
import style from './Body.module.css'
import plus from "../Assets/plus.svg"

export function Body() {

    const todoList = [1, 2, 3, 4];

    return (
        <div className={style.body}>
            <form className={style.form}>
                <input className={style.input} type="text" placeholder='Adicione uma nova tarefa' />
                <button type='submit' className={style.button}>Criar <img src={plus} /></button>
            </form>
            <div className={style.content}>
                <div className={style.top}>
                    <span className={style.todoCreated}>Tarefas criadas <p>0</p> </span>
                    <span className={style.todoDone}>Concluídas <p>0</p> </span>
                </div>
                <div className={style.list}>
                    {!todoList ? <NoTodoList /> : todoList.map((todo) => {
                        return <TodoList />
                    })}
                </div>
            </div>
        </div>
    )
}