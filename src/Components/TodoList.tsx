import style from "./TodoList.module.css";

import trash from "../Assets/trash.svg";
import check from "../Assets/check.svg";

export function TodoList() {
    return (
        <div className={style.todoItem}>
            <img className={style.todoCheckButton} src={check} />
            <span className={style.todoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quia error nisi et hic nihil voluptate alias porro sed nulla? Labore harum sit incidunt voluptate, architecto et libero tempore dolore? Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            <img className={style.todoDeleteButton} src={trash} />
        </div>
    )
}