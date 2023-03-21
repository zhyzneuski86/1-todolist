import React, {ChangeEvent, FC} from 'react';
import {FilterValuesType, TaskType} from "./App";

export type ListTasksType = {
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskId: string) => void
    changeTodoListFilter: (filter: FilterValuesType) => void
    changeTaskStatus: (taskId: string, newIsDone: boolean) => void
}


const ListTasks: FC<ListTasksType> = (props) => {

    const todoListItems: Array<JSX.Element> = props.tasks.map((task, i) => {
        const removeTaskHandler = () => props.removeTask(task.id)
        const changeTaskStatus = (e:ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(task.id, e.currentTarget.checked)

        return (
            <li key={i}>
                <input
                    onChange={changeTaskStatus}
                    type="checkbox"
                    checked={task.isDone}/>
                <span className={task.isDone ?"task-done": "task"}>{task.title}</span>
                <button onClick={removeTaskHandler}>+
                </button>
            </li>
        )
    })

    return (
        <div>
            <ul>
                {todoListItems}
            </ul>
            <div>
                <button
                    className={props.filter==="all" ? "btn-active ": ""}
                    onClick={() => {
                    props.changeTodoListFilter("all")
                }}>All
                </button>
                <button
                    className={props.filter==="active" ? "btn-active ": ""}
                    onClick={() => {
                    props.changeTodoListFilter("active")
                }}>Active
                </button>
                <button
                    className={props.filter==="completed" ? "btn-active ": ""}
                    onClick={() => {
                    props.changeTodoListFilter("completed")
                }}>Completed
                </button>
            </div>
        </div>
    );
};

export default ListTasks;