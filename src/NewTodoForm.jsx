import { useState } from "react"
import "./styles.css"

export function NewTodoForm({addTodo}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        if (newItem === "") return
        
        addTodo(newItem)
    
        setNewItem("")
    }

    return <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">Input New Item:</label>
      <input 
      value={newItem}
      onChange={event => setNewItem(event.target.value)} 
      type="text" 
      id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
}