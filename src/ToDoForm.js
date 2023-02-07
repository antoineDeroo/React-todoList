import React, { useState } from "react";

const ToDoForm = ({addTask}) => {
    const [ userInput, setUserInput ] = useState('');
    return (
        <form>
            <input value={userInput} 
                   type="text" 
                   onChange={handleChange} 
                   placeholder="Enter task...">
                
            </input>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
    function handleSubmit(e){
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    function handleChange(e){
        setUserInput(e.currentTarget.value);
    }
 };

export default ToDoForm;