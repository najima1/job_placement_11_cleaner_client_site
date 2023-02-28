import axios from 'axios'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Blog from '../Pages/Blog/Blog'
import Contact_page from '../Pages/Contact_page/Contact_page'
import Error_page from '../Pages/Error_page/Error_page'
import Home from '../Pages/Home/Home'
import Product_details from '../Pages/Product_details/Product_details'
import Product_temp from '../Pages/Product_page/Product_temp'
import Review from '../Pages/Review/Review'
import Service_page from '../Pages/Service_page/Service_page'
import Show_all_product from '../Pages/Show_all_product/Show_all_product'
import Sign_in from '../Pages/Sign_in/Sign_in'
import Sign_up from "../Pages/Sign_up/Sign_up.jsx"
import Private_route from '../Private_route/Private_route'



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error_page />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/review",
                element: <Review />
            },
            {
                path: "/signin",
                element: <Sign_in />
            },
            {
                path: "/signup",
                element: <Sign_up />
            },
            {
                path: "/signin",
                element: <Sign_in />
            },
            {
                path: "/blog",
                element: <Blog />

            },
            {
                path: "/contact",
                element: <Contact_page />
            },
            {
                path: "/service",
                element: <Service_page />
            },
            {
                path: "/product/:id",
                element: <Private_route>
                    <Product_details />
                </Private_route>,
                
                loader: async ({ params }) => await axios.get(`${ process.env.REACT_APP_URL }/allProduct/${ params.id }`),
            },
            {
                path: "/show_product_all",
                element: <Show_all_product />
            }

        ]
    }
])

export default router
