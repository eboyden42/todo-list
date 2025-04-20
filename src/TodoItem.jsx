export function TodoItem({title, id, complete, toggleTodo, deleteTodo, listID}) {

    return <li>
    <label>
      <input type="checkbox" checked={complete} onChange={(e)=>toggleTodo(id, e.target.checked, listID)}/>
      {title}
    </label>
    <button className="btn btn-danger" onClick={() => deleteTodo(id, listID)}>x</button>
  </li>
}