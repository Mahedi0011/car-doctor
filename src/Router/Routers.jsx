

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import CheckOut from "../Components/Pages/CheckOut/CheckOut";
import Bookings from "../Components/Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
 


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/booking/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/booking/${params.id}`)                
            },
            {
                path:'/bookings',
                element : <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    },
]);

export default router;