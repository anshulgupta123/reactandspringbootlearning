import axios from "axios";
import { apiClient } from "./ApiClient";


export default function reteriveHelloWorldBean(token){
    return apiClient.get('/hello-world',{
        headers:{
            Authorization:token
        }
    })

}



