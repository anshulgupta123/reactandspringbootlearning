import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodoApi, retereviveTodoListByUserName } from "./api/TodoApiSevice";
import { useAuth } from "./security/AuthContext";

export default function ListTodosComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear + 12, today.getMonth(), today.getDay());
    const[message,setMessage]=useState(null)
    const authContext=useAuth();
    const userName=authContext.userName;
    const navigate=useNavigate()
    //const todos = [
    //{ 
    //id: 1, description: 'Learn Aws',done:false,targetDate:targetDate },
    //{ id: 2, description: 'Learn Full Stack development',done:false,targetDate:targetDate },
    //{ id: 3, description: 'Learn Devops',done:false,targetDate:targetDate }
    //]
    const [todos, setTodos] = useState([])
    useEffect(
        ()=>refereshTodos(),[]
    )
    function refereshTodos() {
    retereviveTodoListByUserName(userName).then(
        response =>{ 
            console.log(response.data)
            setTodos(response.data)
        }

    ).catch(error => console.log(error)).finally(
        console.log('clean up called')
    )
}

function deleteTodo(id){
  console.log('clicked ' +id)
  deleteTodoApi(userName,id).then(
    ()=>{
        refereshTodos()
        setMessage(`Delete of todo with id =${id} successfull`)
    }

  ).catch(

  )
}
function updateTodo(id){
    console.log(' update clicked ' +id)
    navigate(`/todo/${id}`)
    
  }

  function addNewTodo(){
    console.log(' new todo clicked ')
    navigate(`/todo/-1`)
    
  }


return (
    <div className="container">
        <h1>Things You Want To Todo</h1>
        {message && <div className="alert-warning">{message}</div>}
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>IsDone?</th>
                        <th>TargetDate</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.todoId}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={()=>deleteTodo(todo.todoId)}>Delete</button></td>
                                    <td><button className="btn btn-warning" onClick={()=>updateTodo(todo.todoId)}>Update</button></td>

                                </tr>
                            )
                        )
                    }

                </tbody>
            </table>
        </div>
        <div>
            <button className="btn btn-suceess m-5" onClick={addNewTodo}>AddTodo</button>
        </div>
    </div>
);

                }