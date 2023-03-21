import React, {ChangeEvent, KeyboardEvent, FC, useRef, useState} from 'react';



export type AddTaskFormType = {
    addTask: (title: string) => void
}

const AddTaskForm: FC<AddTaskFormType> = (props) => {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const maxTitleLength  = 20
    const recommendedTitleLength = 10
    const isTaskNotPossible = title.length === 0 || title.length > maxTitleLength || error


    const addTaskHandler = () => {
        const trimmedTitle = title.trim()
       if (trimmedTitle) {
           props.addTask(trimmedTitle)

       } else {
           setError(true)
       }
        setTitle("")
    }
    const setLocalTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setTitle(e.currentTarget.value)
    }
    const onKeyDownAddTaskHandler = isTaskNotPossible
        ? undefined
        : (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTaskHandler()
    const longTitleWarningMessage = (title.length > recommendedTitleLength && title.length <= maxTitleLength) && <div style={{color: "hotpink"}}>Title should be shorter</div>
    const longTitleErrorMessage = title.length > maxTitleLength && <div style={{color: "red"}}>Title is too long!!!</div>
    const errorMessage = error && <div style={{color: "red"}}>Title is hard required!!!</div>
    return (
        <div>
            <input
                placeholder="Enter task title, please "
                value={title}
                onChange={setLocalTitleHandler}
                onKeyDown={onKeyDownAddTaskHandler}
                className = {error ? "input-error": ""}/>

            <button
                disabled={isTaskNotPossible}
                onClick={addTaskHandler}
            >+
            </button>
            {longTitleWarningMessage}
            {longTitleErrorMessage}
            {errorMessage}
        </div>

    );
};

export default AddTaskForm;