import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Admin from "../Layout/admin";
import Home from "../pages/Home/Home";

export const myRouter = createBrowserRouter([
    {
    path: '/',
    element: <Layout/>,
    children: [
        {
         path: '/',
         element: <Home/>
        },
    ]
    },
    {
        path: 'admin',
        element: <Admin/>,
        children: [
            {

            },
        ]
    }
])