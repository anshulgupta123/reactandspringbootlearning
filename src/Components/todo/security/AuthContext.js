import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeBasicAuthenticationService, executeJwtAuthenticationService } from "../api/AuthenticationApiService";

export const AuthContext =createContext()

export const useAuth=() => useContext(AuthContext)

export default function AuthProvider({children}){

    const[isAuthenticated,setAuthenticated]=useState(false);

    const[userName,setUserName]=useState(null)
    const[token,setToken]=useState(null)
    // async function login(userName,password){
    //     const basicToken='Basic ' + window.btoa(userName + ":" + password)
    //     try{
    //         const response=await executeBasicAuthenticationService(basicToken)
    //     if (response.status=200) {
    //          setAuthenticated(true)
    //          setUserName(userName)
    //          setToken(basicToken)
    //          apiClient.interceptors.request.use(
    //             (config)=>{
    //                 console.log("intercepting the request")
    //                 config.headers.Authorization=basicToken
    //                 return config
    //             }
    //          )
    //          console.log("Authenticated")
    //          return true
    //      }
    //      else {
    //          setAuthenticated(false)
    //          setUserName(null)
    //          setToken(null)
    //          console.log("Authentication failed")
    //          return false
    //      }
    //     }
    //     catch(error){
    //         setAuthenticated(false)
    //         setUserName(null)
    //         setToken(null)
    //         console.log("Authentication failed")
    //         return false
    //     }
    // }

    async function login(userName,password){
        try{
            const response=await executeJwtAuthenticationService(userName,password)
        if (response.status=200) {
            const jwtToken='Bearer '+response.data.token;
             setAuthenticated(true)
             setUserName(userName)
             setToken(jwtToken)
             apiClient.interceptors.request.use(
                (config)=>{
                    console.log("intercepting the request")
                    config.headers.Authorization=jwtToken
                    return config                }
             )
             console.log("Authenticated")
             return true
         }
         else {
             setAuthenticated(false)
             setUserName(null)
             setToken(null)
             console.log("Authentication failed")
             return false
         }
        }
        catch(error){
            setAuthenticated(false)
            setUserName(null)
            setToken(null)
            console.log("Authentication failed")
            return false
        }
    }


    function logout(){
        setAuthenticated(false)
        setToken(null)
        setUserName(null)
    }

     //setInterval( ()=>setNumber(number+1),10000)
     const valueToBeShared={isAuthenticated,login,logout,userName,token}
      return(
        <AuthContext.Provider value={ valueToBeShared }>
            {children}
        </AuthContext.Provider>
      )
}