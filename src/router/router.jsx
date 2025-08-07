import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Admin from "../Layout/admin";
import Home from "../pages/Home/Home";
import { Contact } from "../pages/contacts/Contact";
import Section1 from "../components/Section1/Section1";
import Products from "../pages/products/Products";
import GoodsProcessing from "../pages/GoodsProcessing/GoodsProcessing";

export const myRouter = createBrowserRouter([
    {
    path: '/',
    element: <Layout/>,
    children: [
        {
         path: '/',
         element: <Home/>
        },
        {
          
         path: 'Приёмка-товаров',
         element: <Products/>
        },
        {
         path: 'Обработка-товаров',
         element: <GoodsProcessing/>
        },
        {
         path: 'Контакты',
         element: <Contact/>
        },
        {
         path: 'Приёмка-товаров',
         element: <Products/>
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