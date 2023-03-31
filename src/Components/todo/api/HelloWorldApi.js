import axios from "axios";

const apiClient= axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export default function reteriveHelloWorldBean(){
    return apiClient.get('/hello-world')

}

