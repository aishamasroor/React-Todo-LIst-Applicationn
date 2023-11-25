import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4} from 'uuid'; //universal unique identifier
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import DateTimeDisplay from './DateTimeDisplay';
uuidv4(); 


const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo =>{
    //maintain a current state for each todo item 
    setTodos([...todos, {id: uuidv4(), task:todo, completed:false, isEditing:false}]); //this part create a new todo object with parameters like id task
    console.log(todos)
  }
  const ToggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo,completed : !todo.completed }: todo))

  }

  const deletetodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))

  }

  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}:todo))
  }
  const editTask = (task, id) =>{
    setTodos(todos.map(todo => todo.id === id? {...todo, task, isEditing: !todo.isEditing}:todo))

  }
  return (
    <div className="time-wrapper">
    <div className="time">
<DateTimeDisplay/>
    </div>
    <div className='Todo-wrapper'>
    <h1 className='heading'>MY TODOS!</h1>
    <TodoForm addTodo = {addTodo}/>
    {todos.map((todo, index) => (
      todo.isEditing? (<EditTodoForm editTask = {editTask} task={todo}/>) :
      (<Todo task={todo} key={index} ToggleComplete={ToggleComplete} deletetodo={deletetodo} 
      editTodo={editTodo}/>
      )
    ))}
    </div>
    </div>
  )
}

export default TodoWrapper;
