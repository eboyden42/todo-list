import { useState } from "react";
import { useEffect } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    return localValue === null ? [] : JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, {id: crypto.randomUUID(), title, complete: false}]
    })
  }

  function toggleTodo(id, isChecked) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => todo.id == id ? {...todo, complete: isChecked}: todo)
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  console.log(todos)

  return <>
  <NewTodoForm addTodo={addTodo} />
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
}
