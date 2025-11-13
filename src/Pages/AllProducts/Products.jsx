import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import ProductsCard from "../../Components/Products/ProductsCard";
import useAllProducts from "../../Hooks/useAllProducts";
import useDynamicTitle from "../../Hooks/useDynamicTitle";

const Products = () => {
  const { allProducts, Loading } = useAllProducts();
  const [Search, setSearch] = useState("")
  const [isSearching, setIsSearching] = useState(false);
  const [SearchData, setSearchData] = useState(allProducts);
  useDynamicTitle("All Products");


  useEffect(() => {
    if (!allProducts) return;
    setIsSearching(true);
    const timer = setTimeout(() => {
      const check = Search.trim().toLowerCase();
      const filtered = check
        ? allProducts.filter((Data) =>
          Data.ProductName.trim().toLowerCase().includes(check)
        )
        : allProducts;
      setSearchData(filtered);
      setIsSearching(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [Search, allProducts]);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="my-10">
      <div data-aos="fade-up">
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center">
            <span className="gradient1">All Products</span>
          </h2>
          <div className="gradient2 w-60"></div>
        </div>
        {Loading ? (<LoadingPage />) : (
          <div>
            {allProducts && allProducts.length > 0 ? (
              <div data-aos="fade-up">
                <div className="flex flex-col md:flex-row justify-between items-center p-2 mb-5">
                  <div className="gradient1 text-xl font-bold my-2">
                    <h1>
                      Products Found <span>({SearchData.length})</span>
                    </h1>
                  </div>
                  <div>
                    <input
                      type="search"
                      value={Search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search Products"
                      className="w-68 md:w-95 py-1 my-2 pl-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
                >
                  {isSearching ? (
                    <div className="col-span-12 flex justify-center items-center">
                      <LoadingPage />
                    </div>) : SearchData && SearchData.length > 0 ?
                    (SearchData.map((Product) => (<ProductsCard Product={Product} key={Product._id} />))) :
                    (<div className="col-span-12 min-h-[30vh] flex flex-col items-center justify-center text-center">
                      <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                        No Products Found
                      </h2>
                      <p className="text-gray-500">
                        Nothing to show right now. Export products to fill this space.
                      </p>
                    </div>
                    )}
                </div>
              </div>
            ) : (
              <div className="min-h-[30vh] flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                  No Products Found
                </h2>
                <p className="text-gray-500">
                  Nothing to show right now. Export products to fill this space.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
