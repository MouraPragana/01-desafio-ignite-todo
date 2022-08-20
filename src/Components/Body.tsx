import { ChangeEvent, FormEvent, useState } from "react";
import { NoTodoList } from "./NoTodoList"
import { TodoList } from "./TodoList"
import style from './Body.module.css'
import plus from "../Assets/plus.svg"


export function Body() {

    interface todoListProps {
        id: number;
        description: string;
        isDone: boolean | 'none';
    }

    const [todoList, setTodoList] = useState<todoListProps[]>([]);
    const [todo, setTodo] = useState<todoListProps>({} as todoListProps);

    const todoListQuantity = todoList.length || 0;
    const todoListQuantityDone = todoList.map((todo) => todo).reduce((acc, value) => value.isDone === true ? acc + 1 : acc + 0, 0) || 0;

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
        const newTodo = {
            id: Math.random() * 10000,
            description: event.target.value,
            isDone: false
        }
        setTodo(newTodo);
    };

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const todoLength = todo.description?.trim().length || 0;

        if (todoLength === 0) {
            setTodo({ id: 0, description: "", isDone: "none" });
            return;
        }

        setTodoList([...todoList, todo]);
        setTodo({ id: 0, description: "", isDone: "none" });
    };

    function changeTodoStatus(id: number) {
        const newTodoList = todoList.map((todo) => todo.id === id ? ({
            ...todo,
            isDone: !todo.isDone
        }) : todo)

        setTodoList(newTodoList);
    };

    function deleteTodo(id: number) {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
    }

    return (
        <div className={style.body}>
            <form className={style.form}>
                <input
                    onChange={handleOnChange}
                    name="todo"
                    value={todo.description || ''}
                    className={style.input}
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                />
                <button
                    onClick={handleSubmit}
                    type='submit'
                    className={style.button}>
                    Criar <img src={plus} />
                </button>
            </form>
            <div className={style.content}>
                <div className={style.top}>
                    <span
                        className={style.todoCreated}>
                        Tarefas criadas <p>{todoListQuantity}</p>
                    </span>
                    <span
                        className={style.todoDone}>
                        Concluídas <p>{todoListQuantityDone === 0 ? 0 : `${todoListQuantityDone} de ${todoListQuantity}`}</p>
                    </span>
                </div>
                <div className={style.list}>
                    {todoListQuantity === 0 ? <NoTodoList /> : todoList.map((todo) => {
                        return (
                            <TodoList
                                key={todo.id}
                                id={todo.id}
                                description={todo.description}
                                isDone={todo.isDone}
                                changeTodoStatus={changeTodoStatus}
                                deleteTodo={deleteTodo}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}