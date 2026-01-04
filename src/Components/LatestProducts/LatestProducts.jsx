
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"; 
import ProductsCard from "../Products/ProductsCard";
import useLatestProducts from "../../Hooks/useLatestProducts";

const LatestProducts = () => {
  const { LatestProducts, Loading } = useLatestProducts();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const SkeletonGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex flex-col gap-4 w-full h-[400px]">
          <div className="skeleton h-56 w-full rounded-2xl bg-emerald-50 dark:bg-neutral-600"></div>
          <div className="skeleton h-6 w-3/4 bg-emerald-50 dark:bg-neutral-600"></div>
          <div className="skeleton h-4 w-full bg-emerald-50 dark:bg-neutral-600"></div>
          <div className="skeleton h-10 w-full mt-auto bg-emerald-50 dark:bg-neutral-600"></div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-10 px-4 bg-base-100">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="gradient-text">Latest Products</span>
          </h2>
          <div className="section-divider w-6/12 md:w-4/12"></div>
          <p className="max-w-xl mx-auto text-gray-400 dark:text-gray-500">
            Browse our newest global listings and find the best trade opportunities 
            from verified exporters worldwide.
          </p>
        </div>

        {/* Loading State with Skeletons */}
        {Loading ? (
          <SkeletonGrid />
        ) : (
          <div className="min-h-[400px]">
            {LatestProducts && LatestProducts.length > 0 ? (
              <>
                {/* Desktop: 4 cards per row (Requirement 3.2) */}
                <div 
                  data-aos="fade-up" 
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                  {LatestProducts?.map((Product) => (
                    <ProductsCard Product={Product} key={Product._id} />
                  ))}
                </div>

                {/* View All Products Button */}
                <div data-aos="fade-up" className="flex justify-center md:justify-end mt-12 px-2">
                  <Link to="/Products" className="group flex items-center gap-2 btn-primary ">
                    See All Products
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </>
            ) : (
              <div 
                data-aos="zoom-in" 
                className="flex flex-col items-center justify-center text-center py-20 bg-base-200/50 rounded-[2.5rem] border-2 border-dashed border-emerald-200 dark:border-emerald-900/30"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900/20 p-6 rounded-full mb-6">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                   </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3 tracking-tight">
                  No Products Found
                </h2>
                <p className="text-gray-500 max-w-sm mb-8">
                  The global marketplace is currently updating. Check back soon or start exporting your own products.
                </p>
                <Link to="/AddExportProduct" className="btn-secondary">
                  Start Exporting
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestProducts;