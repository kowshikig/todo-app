import React,{useState} from 'react';
import './App.css';
import Mainpage from './components/Mainpage';
import TodoForm from './components/TodoForm';

import { v4 as uuidv4 } from 'uuid';

function App() {
  // step1
  const [inputValue, setInputValue] = useState('');
  // step3
  const [todos,setTodos] = useState([]);
  const [error,setError] = useState('')
  // step4
  const handleSubmit = e =>{
    e.preventDefault();
    setError("");
    if (inputValue.trim() === '') {
      setError("Todo can't be empty, Please add a Todo");
      return;
    }
    setTodos([...todos,{todoText:inputValue,todoId:uuidv4()}]);
    setInputValue(" ");
  }

  const removeTodo = (id) => {
    setTodos (todos.filter(todoItem => todoItem.todoId !== id));
  }
  return (
    <div className="App">
      <Mainpage 
      handleSubmit = {handleSubmit}
      inputValue = {inputValue} 
      setInputValue = {setInputValue}
      error = {error}
      />
      <TodoForm 
      todos = {todos}
      removeTodo = {removeTodo}/>
    </div>
  );
}

export default App;
