import React, {FC} from 'react';
export type AddTaskFormType = {

}

const AddTaskForm: FC<AddTaskFormType> = (props) => {
    return (
        <div>
            <input/>
            <button>+</button>
        </div>

    );
};

export default AddTaskForm;