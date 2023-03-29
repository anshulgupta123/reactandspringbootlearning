import { useContext, useState } from 'react';
import './TodoApp.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import WelcomeComponent from './WelcomeComponet';
import ErrorComponent from './ErrorComponent';
import LoginComponent from './LoginComponent';
import AuthProvider from './security/AuthContext';
import { useAuth } from './security/AuthContext';


function AuthenticatedRoute({children}){
    const authContext=useAuth();
    if(authContext.isAuthenticated)
       return children;
    return <Navigate to ="/"></Navigate>
}

export default function TodoApp() {
    return (
        <div>
            <AuthProvider>
            <BrowserRouter>
            <HeaderComponent></HeaderComponent>
                <Routes>
                    <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
                    <Route path='login' element={<LoginComponent></LoginComponent>}></Route>
                    <Route path='welcome/:userName' element={
                        <AuthenticatedRoute>
                    <WelcomeComponent></WelcomeComponent>
                    </AuthenticatedRoute>
                    }></Route>
                    <Route path='*' element={<ErrorComponent></ErrorComponent>}></Route>
                    <Route path='/todos' element={
                    <AuthenticatedRoute>
                    <ListTodosComponent></ListTodosComponent>
                    </AuthenticatedRoute>

                    }></Route>
                    <Route path='/logout' element={
                                            <AuthenticatedRoute>

                    <LogoutComponent></LogoutComponent>
                    </AuthenticatedRoute>

                    }></Route>
                </Routes>
                <FooterComponent></FooterComponent>
            </BrowserRouter>
            </AuthProvider>


        </div>
    );
}











