import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BrandEntry from "../Pages/BrandEntry/BrandEntry";
import PhoneEntry from "../Pages/PhoneEntry/PhoneEntry";
import Products from "../Components/Products/Products";
import Details from "../Pages/Details/Details";
import MyCart from "../Pages/MyCart/MyCart";
import Update from "../Pages/Update/Update";
import PrivateRoute from "./PrivateRoute";

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
                element:<PrivateRoute> <BrandEntry/></PrivateRoute>
            },
            {
                path: '/addPhone',
                element: <PhoneEntry/>
            },
            {
                path: '/brand/:brand',
                element:<Products/>,
                loader:({params})=>fetch(`http://localhost:5000/brand/${params.brand}`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details/></PrivateRoute>, 
                loader: ({params})=>fetch(`http://localhost:5000/details/${params.id}`)

            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart/></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/cart')
            },
            {
                path:'/update/:id',
                element:<PrivateRoute> <Update/></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/details/${params.id}`)
            }
        ]
    },
]);



export default router;