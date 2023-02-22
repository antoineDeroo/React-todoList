import React from 'react';
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