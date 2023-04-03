import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import reteriveHelloWorldBean from './api/HelloWorldApi';
import { useAuth } from './security/AuthContext';
export default function WelcomeComponent() {

    const authContext=useAuth()
    const[message,setMessage]= useState(null);

    function callHelloWorldRestApi(){
        console.log("Called")
        reteriveHelloWorldBean(authContext.token).then((response)=>successfullResponse(response))
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
