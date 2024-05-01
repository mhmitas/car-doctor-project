import React from 'react';
import Root from '../routes/root';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import SignUp from '../pages/signUp/SignUp';
import Profile from '../pages/profile/Profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
        ]
    }
])

export default router;