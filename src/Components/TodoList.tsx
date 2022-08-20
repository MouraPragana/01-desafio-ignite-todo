import style from "./TodoList.module.css";

import trash from "../Assets/trash.svg";
import check from "../Assets/check.svg";
import checkDone from "../Assets/checkDone.svg"

interface todoListProps {
    id: number;
    description: string;
    isDone: boolean | "none";
    changeTodoStatus: (description: number) => void;
    deleteTodo: (description: number) => void;
}


export function TodoList({ id, description, isDone, changeTodoStatus, deleteTodo }: todoListProps) {

    function handleChangeTodoStatus() {
        changeTodoStatus(id);
    };

    function handleDeleteTodo() {
        deleteTodo(id);
    };

    return (
        <div className={style.todoItem}>
            <img
                onClick={handleChangeTodoStatus}
                className={style.todoCheckButton}
                src={isDone ? checkDone : check}
            />
            <span
                className={isDone ? style.todoTextDone : style.todoText}>
                {description}
            </span>
            <img
                onClick={handleDeleteTodo}
                className={style.todoDeleteButton}
                src={trash}
            />
        </div>
    )
}