import { useState } from "react"
import "./styles.css"

export function NewTodoForm({addTodo, listID, deleteList}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        if (newItem === "") return
        
        addTodo(newItem, listID)
    
        setNewItem("")
    }

    function handleDelete() {
      deleteList(listID)
    }

    return (
      <>
      <form onSubmit={handleSubmit} className="new-item-form">
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
      <button className="btn btn-danger" id="delete-list-btn" onClick={handleDelete}>Delete List</button>
      </>
    )
}