import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGlobeAmericas, FaBoxOpen, FaStar } from "react-icons/fa";

const ProductSkeleton = () => (
  <div className="animate-pulse bg-white dark:bg-neutral-900 rounded-xl h-[420px] w-full shadow-sm border border-emerald-50 dark:border-emerald-900/30"></div>
);

const ProductsCard = ({ Product, loading }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    if (!loading) setIsLoading(false);
  }, [loading]);

  if (isLoading || !Product) return <ProductSkeleton />;

  return (
    <div
      data-aos="fade-up"
      className="group bg-base=100 dark:bg-base-900 rounded-xl shadow-sm hover:shadow-xl border border-emerald-50 dark:border-emerald-900/30 overflow-hidden transform hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative overflow-hidden h-72">
        <img
          src={Product.ProductImage}
          alt={Product.ProductName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
            New Arrival
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-emerald-800 text-[10px] font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1">
            <FaGlobeAmericas /> {Product.OriginCountry}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-base-800 dark:text-base-50 group-hover:text-emerald-600 transition-colors line-clamp-1">
            {Product.ProductName}
          </h3>
          <div className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg">
            <FaStar className="text-orange-400 text-xs" />
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
              {Product.Rating}
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
          {Product.Description || "No description available."}
        </p>

        <div className="space-y-3 mt-4 flex-grow">
          {/* Stock Info */}
          <div className="flex justify-between items-center text-sm">
            <p className="flex items-center gap-2 ">
              <FaBoxOpen className="text-emerald-500" />
              Stock:{" "}
              <span className="font-semibold ">
                {Product.AvailableQuantity} units
              </span>
            </p>
          </div>

          {/* Price & Button */}
          <div className="flex justify-between items-end pt-2 border-t border-emerald-50 dark:border-emerald-900/30">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                Price
              </span>
              <span className="text-2xl font-black text-emerald-700 dark:text-emerald-400">
                ${Product.Price}
              </span>
            </div>
            <Link
              to={`/Products/${Product._id}`}
              className="btn-primary  px-5 py-2.5 rounded-xl font-bold text-sm shadow shadow-emerald-500/20 transition-all active:scale-95"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
