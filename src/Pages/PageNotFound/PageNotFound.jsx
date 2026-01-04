import { Link, useNavigate } from "react-router";
import useDynamicTitle from "../../Hooks/useDynamicTitle";
import { FaHome, FaArrowLeft,  } from "react-icons/fa";

const PageNotFound = () => {
  useDynamicTitle("Page Not Found");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center px-6">
      
      <div className="relative">
        <h1 className="text-[12rem] md:text-[18rem] font-black text-red-400 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="w-64 h-64 bg-emerald-200/50 rounded-full blur-3xl absolute -z-10 animate-pulse"></div>
          
        </div>
      </div>

      <div className="text-center max-w-md -mt-10 md:-mt-16 z-10">
        <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-1 border-2 border-emerald-500 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-all active:scale-95"
        >
          <FaArrowLeft /> Go Back
        </button>

        <Link 
          to="/" 
          className="btn-primary "
        >
          <FaHome /> Back to Home
        </Link>
      </div>

      <div className="mt-16 pt-8 border-t border-emerald-200 w-full max-w-2xl text-center">
        <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-4">
          Quick Links
        </p>
        <div className="flex justify-center gap-8 text-emerald-600 font-medium text-sm">
          <Link to="/products" className="hover:underline">All Products</Link>
          <Link to="/contact" className="hover:underline">Contact Support</Link>
          <Link to="/" className="hover:underline">Help Center</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;