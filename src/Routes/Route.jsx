import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Products from "../Pages/AllProducts/Products";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import SignUp from "../Pages/SignUp/SignUp";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductDetailPage from "../Pages/ProductDetailPage/ProductDetailPage";
import MyImports from "../Pages/MyImports/MyImports";
import AddExportProduct from "../Pages/AddExportProduct/AddExportProduct";
import MyExports from "../Pages/MyExports/MyExports";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                errorElement: <ErrorPage />,
                element: <Home />,
            },
            {
                path: "Products",
                element: <Products />,
            },
            {
                path: "Products/:id",
                element: <ProtectedRoute><ProductDetailPage/></ProtectedRoute>,
            },
            {
                path: "Login",
                element: <Login />,
            },
            {
                path: "Profile",
                element: <ProtectedRoute><Profile /></ProtectedRoute>,
            },
            {
                path: "MyImports",
                element: <MyImports />,
            },
            {
                path: "MyExports",
                element: <MyExports />,
            },
            {
                path: "AddExportProduct",
                element: <AddExportProduct />,
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
                path: "ForgetPassword",
                element: <ForgetPassword />,
            },
            
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
])

export default router;