import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BrandEntry from "../Pages/BrandEntry/BrandEntry";
import PhoneEntry from "../Pages/PhoneEntry/PhoneEntry";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/brandEntry',
                element: <BrandEntry/>
            },
            {
                path: '/addPhone',
                element: <PhoneEntry/>
            }
        ]
    },
]);



export default router;