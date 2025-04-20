import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo, title, listID}) {

    function countIncompleteTodos() {
        return todos.filter(todo => !todo.complete).length
    }

    return <>
    <h1 className="header">{title}</h1>
    <ul className="list">
      {countIncompleteTodos() === 0 ? "All Tasks Complete!" : countIncompleteTodos()+" item(s) remaining."}
      {todos.map((todo) => {
        return <TodoItem title={todo.title} id={todo.id} complete={todo.complete} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} listID={listID}/>
      })}
    </ul>
    </>
}