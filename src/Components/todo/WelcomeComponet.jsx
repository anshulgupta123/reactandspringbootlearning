import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
export default function WelcomeComponent() {

    const[message,setMessage]= useState(null);

    function callHelloWorldRestApi(){
        console.log("Called")
        axios.get('http://localhost:8080/hello-world')
        .then((response)=>successfullResponse(response))
        .catch((error)=>errorResponse(error))
        .finally(()=>console.log('clean up'))

    }

    function successfullResponse(response){
         console.log(response)
         setMessage(response.data)
    }
    function errorResponse(error){
        console.log(error)
    }
    const { userName } = useParams();
    console.log(userName)
    return (
        <>
            <div>
                Your Todos - <Link to='/todos'>Go Here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Hello</button>
            </div>
            <div className="text-message">
                {message}
            </div>
        </>
    );
}
