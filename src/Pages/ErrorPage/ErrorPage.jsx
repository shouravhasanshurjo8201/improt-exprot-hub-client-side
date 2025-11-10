import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-rose-50 text-center p-6">
            <div className="text-8xl mb-6 text-rose-500">⚠️</div>
            <h1 className="text-6xl font-bold text-rose-400 mb-3">
                {error?.status || "Error"}
            </h1>
            <p className="text-gray-700 max-w-md mb-6">
                {error?.statusText || error?.message || "Something went wrong!"}
            </p>
            <Link to="/" className="px-6 py-3 bg-emerald-600 text-white rounded font-semibold hover:bg-emerald-500 hover:shadow-md transition-all" >
                Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;
