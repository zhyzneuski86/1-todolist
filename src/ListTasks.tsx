import React, {FC} from 'react';
import {FilterValuesType, TaskType} from "./App";

export type ListTasksType = {
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeTodoListFilter:(filter: FilterValuesType) => void



}


const ListTasks: FC<ListTasksType> = (props) => {

    const todoListItems: Array<JSX.Element> = props.tasks.map((task, i) => {
        return (
            <li key={i}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={() => {
                    props.removeTask(task.id)
                }}>+
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
                <button onClick={() => {
                    props.changeTodoListFilter("all")
                }}>All</button>
                <button onClick={() => {
                    props.changeTodoListFilter("active")
                }}>Active</button>
                <button onClick={() => {
                    props.changeTodoListFilter("completed")
                }}>Completed</button>
            </div>
        </div>
    );
};

export default ListTasks;