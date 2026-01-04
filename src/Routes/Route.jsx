

import { createBrowserRouter } from "react-router-dom";
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
import LoadingPage from "../Pages/LoadingPage/LoadingPage";
import CookiesPolicy from "../Components/CookiesConsent/CookiesConsent";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                hydrateFallbackElement: <LoadingPage />
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
                path: "SignUp",
                element: <SignUp />,
            },
            {
                path: "ForgetPassword",
                element: <ForgetPassword />
            },

            {
                path: "Products/:id",
                element: <ProductDetailPage />,
            },
            {
                path: "Profile",
                element: <ProtectedRoute><Profile /></ProtectedRoute>,
            },
            {
                path: "UpdateProfile",
                element: <ProtectedRoute><UpdateProfile /></ProtectedRoute>,
            },
            {
                path: "MyImports",
                element: <ProtectedRoute><MyImports /></ProtectedRoute>,
            },
            {
                path: "MyExports",
                element: <ProtectedRoute><MyExports /></ProtectedRoute>,
            },
            {
                path: "AddExportProduct",
                element: <ProtectedRoute><AddExportProduct /></ProtectedRoute>,
            },
            {
                path: "cookies",
                element: <CookiesPolicy />,
            },
            {
                path: "About",
                element: <AboutUs />,
            },

            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
]);

export default router;