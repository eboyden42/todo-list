import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import { useState } from "react"
import { useEffect } from "react"

export default function List({ listTitle, todos, addTodo, toggleTodo, deleteTodo, id, deleteList }) {

    return (
        <>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} title={listTitle} listID={id} />
            <NewTodoForm addTodo={addTodo} listID={id} deleteList={deleteList} />
        </>
    )
}