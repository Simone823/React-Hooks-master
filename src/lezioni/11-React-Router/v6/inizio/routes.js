import React from "react";

import Home from "./Home";

import About from './About';

import Products from './Products';

import Product from "./Product";

import PageNotFound from './PageNotFound';

export const routes = [
    {
        path: '/',
        element: <Home/>
    },

    {
        path: '/about',
        element: <About/>
    },

    {
        path: '/products',
        element: <Products/>
    },

    {
        path: '/product/:id',
        element: <Product/>
    },

    {
        path: '*',
        element: <PageNotFound/>
    }
]