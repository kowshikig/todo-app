import React  from 'react'
import { 
    Container,
    ConP,
    Icon
 } from './TodoFormElements'
 import { FaTrashAlt } from 'react-icons/fa'
 

 

const TodoForm = ({todos,removeTodo}) => {
  return (
    <>
        {todos.map(todoItem => (
            <Container>
            <ConP key={todoItem.todoId}>
            {todoItem.todoText}
             <Icon onClick={() => removeTodo(todoItem.todoId)}>
                 <FaTrashAlt />
             </Icon>
         </ConP>
         </Container>
        ))}
        
     </>   
        
    
  )
}

export default TodoForm
