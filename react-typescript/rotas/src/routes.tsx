import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Product } from "./pages/product";
import { NotFound } from "./pages/notfound";

import { Layout } from "./components/layout";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/product/:id",
                element: <Product/>
            },
            {
                path: "*",
                element: <NotFound/>
            },
        ]
    }
])

export { router }