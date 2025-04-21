import AddNewListForm from "./AddNewListForm"
import logoURL from "/images/logo.png"

export default function Header({ handleNewList }) {
    return (
        <>
        <header id="header-container">
            <div id="logo-container">
                <img src={logoURL}  alt="checklist icon"/>
                <h1>my todo list.</h1>
            </div>
            <AddNewListForm handleNewList={handleNewList} />
        </header>
        </>
    )
}