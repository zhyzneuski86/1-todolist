import React, {FC} from 'react';
import {FilterValuesType, TaskType} from "./App";
import Header from "./Header";
import AddTaskForm from "./AddTaskForm";
import ListTasks from "./ListTasks";



type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeTodoListFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}

const TodoList: FC<TodoListPropsType> = (props) => {


    return (
        <div className={"todolist"}>
            <Header title={props.title}/>
            <AddTaskForm addTask={props.addTask}/>
            <ListTasks
                tasks={props.tasks}
                removeTask={props.removeTask}
                changeTodoListFilter={props.changeTodoListFilter}/>
        </div>
    );
};

export default TodoList;
