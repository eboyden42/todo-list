import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo, title, listID}) {

    return <>
    <h1 className="header">{title}</h1>
    <hr id="hr-break"></hr>
    <ul className="list">
      {todos.map((todo) => {
        return <TodoItem title={todo.title} id={todo.id} complete={todo.complete} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} listID={listID}/>
      })}
    </ul>
    </>
}