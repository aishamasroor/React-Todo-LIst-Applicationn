 import React, { useState} from 'react'

const EditTodoForm = ({editTask, task}) => {
  // making a state object
  const [ value, setvalue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id);
    console.log("task id",task.id)
    setvalue("");
  }
  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
      <input className='TodoInput' onChange= {(e) => setvalue(e.target.value)} value = {value} type = 'text' placeholder=''/>
      <button className='todo-btn'>Update Task</button>

      </form>
    </div>
  );
};

export default EditTodoForm;
