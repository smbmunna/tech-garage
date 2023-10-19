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
            },
            {
                path: '/brand/:brand',
                element:<Products/>,
                loader:({params})=>fetch(`http://localhost:5000/brand/${params.brand}`)
            },
            {
                path: '/details/:id',
                element: <Details/>, 
                loader: ({params})=>fetch(`http://localhost:5000/details/${params.id}`)

            },
            {
                path: '/myCart',
                element: <MyCart/>,
                loader: ()=> fetch('http://localhost:5000/cart')
            }
        ]
    },
]);



export default router;