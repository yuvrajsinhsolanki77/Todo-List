import { useEffect, useState } from "react"
import TodoInput from "../components/Todoinput"
import TodoList from "../components/TodoList"

function App() {ytarfv7VTI8 
  
   const [todos, setTodos] = useState ([
    'Go to the gym',
    'Eat more fruits and vege',
    'Pick up the kids from school'
  ])
   const [todoValue, setTodoValue] = useState ('')

   function persisData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos:newList}))
   }

   function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
    setTodos(newTodoList)
   }

   function handleDeleteTodo (index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
   }

   function handleEditTodo(index) {
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index)
   }
   
   useEffect(() =>{
    if (!localStorage){
      return
    }
  let localTodos = localStorage.getItem('todos')
  if (localTodos){
    return
  } 
    localTodos = JSON.parse(localTodos).todos
   },[])
 
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue=
      {setTodoValue} handleAddTodos = {handleAddTodos} />
      <TodoList handleAddTodo={handleAddTodo}  handleDeleteTodo={todos}/>
    </>
  )
}

export default App
