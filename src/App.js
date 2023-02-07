/* import logo from './logo.svg'; */
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

import data from "./data.json";
import React, { useState } from "react";

import './App.css';

function App() {

  const [ toDoList, setToDoList ] = useState(data);
  
  const handleToggle = (id) => {
    console.log(id);
    let mapped = toDoList.map(task => {
        return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
        <Header />
        <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle}/>
        <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
