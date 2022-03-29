import {useNavigate} from "react-router-dom";

export function Login(props){
    const navigate = useNavigate();
    return(<div>
<h1>Login</h1>
        <button onClick={() => {navigate("/home");
        props.doLogin("Lígia");}}>
            Clicar para fazer o login
        </button>

    </div>)
}