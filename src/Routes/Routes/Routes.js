import { createBrowserRouter } from "react-router-dom";
import DasboardLayout from "../../Layouts/DashboardLayout/DasboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import AllUsers from "../../Pages/Dashboard/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Errorpage from "../../Pages/Errorpage/Errorpage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/categories/:category',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://y-nu-wine.vercel.app/categories/${params.category}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DasboardLayout></DasboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
        ]
    }
])