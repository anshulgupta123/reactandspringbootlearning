import { useState } from 'react';
import './TodoApp.css'
import { BrowserRouter, Routes, Route, useNavigate, useParams,Link } from 'react-router-dom'

export default function TodoApp() {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
                    <Route path='login' element={<LoginComponent></LoginComponent>}></Route>
                    <Route path='welcome/:userName' element={<WelcomeComponent></WelcomeComponent>}></Route>
                    <Route path='*' element={<ErrorComponent></ErrorComponent>}></Route>
                    <Route path='/todos' element={<ListTodosComponent></ListTodosComponent>}></Route>
                    <Route path='/logout' element={<LogoutComponent></LogoutComponent>}></Route>
                </Routes>
            </BrowserRouter>
            <FooterComponent></FooterComponent>

        </div>
    );
}

function LoginComponent() {
    const [userName, setUserName] = useState("in28minutes");
    const [password, setPassword] = useState("password");
    const [showSuccessMesage, setSuccessMessage] = useState(false);
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
        if (userName === 'anshul' && password === '12345') {
            console.log("Authenticated")
            setSuccessMessage(true)
            setErrorMessage(false)
            navigate(`/welcome/${userName}`)
        }
        else {
            console.log("Authentication failed")
            setErrorMessage(true)
            setSuccessMessage(false)
        }
    }
    // function SuccessMessageComponent() {
    //     if (showSuccessMesage) {
    //         return <div className="successMessage">Authenticated Successfully</div>
    //     }
    //     return null;

    // }


    // function FailureMessageComponent() {
    //     if (showErrorMesage) {
    //         return <div className="failureMessage">Not Authenticated.Kindly check your credentials</div>
    //         return null;
    //     }
    // }

    return (
        <div className="Login">
            {showSuccessMesage && <div className="successMessage">Authenticated Successfully</div>}
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



function WelcomeComponent() {
    const { userName } = useParams();
    console.log(userName)
    return (
        <div>
            Your Todos - <Link to='/todos'>Go Here</Link>
        </div>
    );
}

function ErrorComponent() {
    return (
        <div>We are working hard.Apogolise for the 404.Please reach out our team at abc-defg-kfjfj</div>
    );
}

function ListTodosComponent() {
    const today= new Date();
    const targetDate=new Date(today.getFullYear+12,today.getMonth(),today.getDay()); 
    const todos = [{ id: 1, description: 'Learn Aws',done:false,targetDate:targetDate },
    { id: 2, description: 'Learn Full Stack development',done:false,targetDate:targetDate },
    { id: 3, description: 'Learn Devops',done:false,targetDate:targetDate }
    ]
    return (
        <div className="ListTodosComponent">
            <h1>Things You Want To Todo</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>IsDone?</td>
                            <td>TargetDate</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

function HeaderComponent(){
    return(
        <div>
            Header<hr />
        </div>
    );
}
function FooterComponent(){
    return(
        <div>
            Footer<hr />
        </div>
    );
}

function LogoutComponent(){
    return(
        <div>
            <h1>Thank You for choosing us.You are logged out</h1>
        </div>
    );
}