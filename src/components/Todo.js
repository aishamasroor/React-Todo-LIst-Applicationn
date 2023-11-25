import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons"
import { faTrash } from '@fortawesome/free-solid-svg-icons';


// for displaying todos
const Todo = ({task, ToggleComplete, deletetodo , editTodo}) => {
  return (
    <div className='Todo'>
    {/* // Marking Todos as complete */}
    <p onClick={() => {ToggleComplete(task.id)} } className={`${task.completed? 'completed' : " "}`}>{task.task}</p>
    <div>
    <FontAwesomeIcon className="fa-edit" icon={faPenToSquare} onClick={() => {editTodo(task.id)}}/>
    <FontAwesomeIcon className="fa-trash" icon={faTrash} onClick={()=> {deletetodo(task.id)}} />


    </div>
      
    </div>
  )
}

export default Todo
