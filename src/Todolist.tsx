import React, {FC} from 'react';
import {TaskType} from "./App";
import Header from "./Header";
import AddTaskForm from "./AddTaskForm";
import ListTasks from "./ListTasks";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}

const TodoList: FC<TodoListPropsType> = (props) => {
    return (
        <div className={"todolist"}>
            <Header title={props.title}/>
            <AddTaskForm />
            <ListTasks tasks={props.tasks}/>
        </div>
    );
};

export default TodoList;