import style from './Form.module.css'
import plusSvg from "../Assets/plusSvg.svg"

export function Form() {
    return (
        <div>
            <form className={style.form}>
                <input className={style.input} type="text" placeholder='Adicione uma nova tarefa' />
                <button type='submit' className={style.button}>Criar <img src={plusSvg} /></button>
            </form>
            <div className={style.content}>
            </div>
        </div>
    )
}