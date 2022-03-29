import './App.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import {HomePage} from "./components/HomePage"
import {NavBar} from "./components/NavBar";
import {Contacts} from "./components/Contacts";
import {Menu} from "./components/Menu";
import {Login} from "./components/Login";
import {useState} from "react";
import {Navigate} from "react-router-dom";

function App() {
    const [user, setUser] = useState();
    return (
        <div className="App">
            <BrowserRouter>
                {user && <NavBar/>}
                <Routes>
                    <Route path="/home"
                           element={<VerificarUser user={user}><HomePage/></VerificarUser>}/>
                    <Route path="/contacts"
                           element={<VerificarUser user={user}><Contacts/></VerificarUser>}/>
                    <Route path="/menu" element={<VerificarUser user={user}><Menu/></VerificarUser>}/>
                    <Route path="/*" element={<Login doLogin={setUser}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function VerificarUser({user, children}) {
    if (!user) {
        return <Navigate to="/*" replace={true}/>
    }
    return children;
}

export default App;


