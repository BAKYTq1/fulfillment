import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Admin from "../Layout/admin";
import Home from "../pages/Home/Home";
import Products from "../pages/products/Products";
import GoodsProcessing from "../pages/GoodsProcessing/GoodsProcessing";
import InventoryGoods from "../pages/InventoryGoods/InventoryGoods";
import TradeAssistant from "../pages/TradeAssistant/TradeAssistant";
import PhotoStudio from "../pages/PhotoStudio/PhotoStudio";

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
         path: 'goods-acceptance',
         element: <Products/>
        },
        {
         path: 'goods-processing',
         element: <GoodsProcessing/>
        },
        {
         path: 'storage-inventory',
         element: <InventoryGoods/>
        },
        {
         path: 'assistent',
         element: <TradeAssistant/>
        },
        {
         path: 'photo-studio',
         element: <PhotoStudio/>
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