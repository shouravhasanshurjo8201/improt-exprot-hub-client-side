import { Link, useRouteError, } from "react-router";
import { FaExclamationTriangle, FaHome, } from "react-icons/fa";
import useDynamicTitle from "../../Hooks/useDynamicTitle";

const ErrorPage = () => {
    const error = useRouteError();
    useDynamicTitle("System Error");
    console.error(error);

    return (
        <div className="flex flex-col justify-center items-center p-6 transition-colors">
            <div className="max-w-xl w-full shadow rounded-xl overflow-hidden border border-rose-100 dark:border-rose-900/20">

                <div className="bg-rose-500 p-8 flex flex-col items-center">
                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-md mb-4 ring-8 ring-white/10">
                        <FaExclamationTriangle className="text-white text-5xl animate-bounce" />
                    </div>
                    <h1 className="text-7xl font-black text-white tracking-tighter">
                        {error?.status || "!!!"}
                    </h1>
                </div>

                <div className="p-10 text-center">
                    <h2 className="text-2xl font-bold  mb-4 uppercase tracking-wide">
                        Unexpected System Error
                    </h2>

                    <div className="bg-rose-50 dark:bg-rose-950/40 p-4 rounded-xl mb-8 border-l-4 border-rose-500">
                        <p className="text-rose-700  font-mono text-sm ">
                            Error Code: {error?.statusText || error?.message || "Internal Server Failure"}
                        </p>
                    </div>

                    <p className=" mb-10 leading-relaxed">
                        Don't worry, our system logs have captured this incident.
                        Try refreshing the page or head back to the safety of our homepage.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => window.location.reload()}
                            className="flex items-center justify-center gap-2 px-6 py-1 bg-zinc-800 dark:bg-zinc-700 text-white rounded-xl font-bold hover:bg-black transition-all active:scale-95"
                        >
                            Refresh Page
                        </button>

                        <Link
                            to="/"
                            className="btn-primary"
                        >
                            <FaHome /> Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;