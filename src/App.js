import React , {useState} from 'react';
import "./App.css";
import TodoWrapper from './components/TodoWrapper';

const App = ()=>{
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
    <TodoWrapper/>
   
    </div>
  )
};

export default App;