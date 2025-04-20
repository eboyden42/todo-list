import { useState } from "react";
import { useEffect } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import AddNewListForm from "./AddNewListForm.jsx";
import List from "./List.jsx"
import Header from "./Header"
import "./styles.css";

export default function App() {

  const [listList, setListList] = useState(() => {
    const localValue = localStorage.getItem("LIST")
    console.log(JSON.parse(localValue))
    return localValue === null ? [] : JSON.parse(localValue)
  })

  const todoListInfo = [{
    id: 12345,
    listItems: [{
      id: 23441,
      title: "name",
      complete: false
    }, {}]
  }, 
  {
    id: 12345,
    listItems: [{
      id: 23441,
      title: "name",
      complete: false
    }, {}]
  }
]

  useEffect(() => {
    localStorage.setItem("LIST", JSON.stringify(listList))
  }, [listList])

  function addTodo(title, listID) {
    setListList((prevListList) => {
      return prevListList.map((list) => {
        return list.id === listID ? {...list, listItems: [...list.listItems, {id: crypto.randomUUID(), title, complete: false}] } : list
      })
    })
  }

  function toggleTodo(id, isChecked, listID) {
    setListList((prevListList) => {
      return prevListList.map((list) => {
        return list.id === listID ? {...list, listItems: list.listItems.map(todo => todo.id == id ? {...todo, complete: isChecked}: todo) } : list
      })
    })
  }

  function deleteTodo(id, listID) {
    setListList((prevListList) => {
      return prevListList.map((list) => {
        return list.id === listID ? {...list, listItems: list.listItems.filter(todo => todo.id !== id) } : list
      })
    })
  }

  function deleteList(listID) {
    setListList(prevListList => prevListList.filter(list => list.id !== listID))
  }
 
  function handleNewList(formData) {
    console.log(formData.get("newListName"))
    setListList((prevListList) => {
      return [...prevListList, 
        {
          id: crypto.randomUUID(),
          listTitle: formData.get("newListName"),
          listItems: [{}]
    }]
    })
  }

  const listOfListArray = listList.map((list) => {
    return <List 
      id={list.id} 
      listTitle={list.listTitle} 
      todos={list.listItems} 
      addTodo={addTodo} 
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
      deleteList={deleteList}
      /> 
  })

  return <>
  <Header handleNewList={handleNewList}/>
  <main>
    {listOfListArray}
  </main>
  </>
}
