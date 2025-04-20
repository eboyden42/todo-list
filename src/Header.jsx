import AddNewListForm from "./AddNewListForm"

export default function Header({ handleNewList }) {
    return (
        <>
        <header id="header-container">
            <div id="logo-container">
                <img src="./checklist.png"  alt="checklist icon"/>
                <h1>my todo list.</h1>
            </div>
            <AddNewListForm handleNewList={handleNewList} />
        </header>
        </>
    )
}