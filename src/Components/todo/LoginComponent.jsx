import { useNavigate,Link } from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from './security/AuthContext';
export default function LoginComponent() {
    const authContext=useAuth();

    const [userName, setUserName] = useState("in28minutes");
    const [password, setPassword] = useState("password");
    const [showErrorMesage, setErrorMessage] = useState(false);
    const navigate = useNavigate();

    function handleUserName(event) {
        console.log(event.target.value)
        setUserName(event.target.value)

    }

    function hanldePassword(event) {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit() {
        console.log("hanndle submit")
        console.log(userName)
        console.log(password)
        if (authContext.login(userName,password)) {
            console.log("Authenticated")
            navigate(`/welcome/${userName}`)
        }
        else {
            console.log("Authentication failed")
            setErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            {showErrorMesage && <div className="failureMessage">Not Authenticated.Kindly check your credentials</div>}

            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={userName} onChange={handleUserName}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={hanldePassword}></input>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    );
}
