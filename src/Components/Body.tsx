import { NoTodoList } from "./NoTodoList"
import style from './Body.module.css'
import plusSvg from "../Assets/plusSvg.svg"

export function Body() {

    const noTodoList = true;

    return (
        <div className={style.body}>
            <form className={style.form}>
                <input className={style.input} type="text" placeholder='Adicione uma nova tarefa' />
                <button type='submit' className={style.button}>Criar <img src={plusSvg} /></button>
            </form>
            <div className={style.content}>
                <div className={style.top}>
                    <span className={style.todoCreated}>Tarefas criadas <p>0</p> </span>
                    <span className={style.todoDone}>Concluídas <p>0</p> </span>
                </div>
                <div className={style.list}>
                    {noTodoList === true ? <NoTodoList /> : ""}
                </div>
            </div>
        </div>
    )
}