import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Products from "../Pages/AllProducts/Products";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import SignUp from "../Pages/SignUp/SignUp";
import UpdateProfile from "../Pages/Profile/UpdateProfile";

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
                path: "Login",
                element: <Login />,
            },
            {
                path: "Profile",
                element: <Profile />,
            },
            {
                path: "SignUp",
                element: <SignUp />,
            },
            {
                path: "UpdateProfile",
                element: <UpdateProfile />,
            },
            
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
])

export default router;