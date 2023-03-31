import { createContext, useContext, useState } from "react";

export const AuthContext =createContext()

export const useAuth=() => useContext(AuthContext)

export default function AuthProvider({children}){

    const[isAuthenticated,setAuthenticated]=useState(false);

    const[userName,setUserName]=useState(null)

    function login(userName,password){
        if (userName === 'anshul' && password === '12345') {
            setAuthenticated(true)
            setUserName(userName)
            console.log("Authenticated")
            return true
        }
        else {
            setAuthenticated(false)
            setUserName(null)
            console.log("Authentication failed")
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

     //setInterval( ()=>setNumber(number+1),10000)
     const valueToBeShared={isAuthenticated,login,logout,userName}
      return(
        <AuthContext.Provider value={ valueToBeShared }>
            {children}
        </AuthContext.Provider>
      )
}