import React, { useState} from 'react'

const TodoForm = ({addTodo}) => {
  // making a state object
  const [ value, setvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setvalue("");
  }
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
      <input className='TodoInput' onChange= {(e) => setvalue(e.target.value)} value = {value} type = 'text' placeholder='what is the task today?'/>
      <button className='todo-btn' type='submit'>Add Task</button>

      </form>
    </div>
  );
};

export default TodoForm;
