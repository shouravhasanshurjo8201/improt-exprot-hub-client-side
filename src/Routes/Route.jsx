import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Products from "../Pages/AllProducts/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "Products",
                element: <Products />,
            },
            
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
])

export default router;