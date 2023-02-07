import React from 'react';
console.log("todo.js");
const ToDo = ({todo, handleToggle}) => {
   return (
       <div className={todo.complete ? "strike task" : "task"} onClick={ht}>
           {todo.task}
       </div>
   );
   function ht(){
       handleToggle(todo.id);
   }
};
 
export default ToDo;