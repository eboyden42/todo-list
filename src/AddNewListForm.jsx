import "./styles.css"

export default function AddNewListForm({ handleNewList }) {
    return (
        <>
        <section>
            <form action={handleNewList} className="new-list-form-container">
                <input 
                name="newListName" 
                className="new-item-input"
                type="text"
                placeholder="e.g Housekeeping"
                id="new-input"
                />
                <button className="btn">+ Create New List</button>
            </form>
        </section>
        </>
    )
}