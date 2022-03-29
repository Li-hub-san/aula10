import {useNavigate} from "react-router-dom";
import "../css/navBar.css"

export function NavBar() {
    const navigate = useNavigate()


    return (<div className="nav-bar">
        <button onClick={
            () => navigate("/home")}>Home
        </button>
        <button onClick={() => navigate("/contacts")}>Contacts</button>
        <button onClick={() => navigate("/menu")}>Menu</button>
    </div>)
}