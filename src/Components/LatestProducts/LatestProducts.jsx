import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import LoadingPage from "../../Pages/LoadingPage/LoadingPage";
import ProductsCard from "../Products/ProductsCard";
import useLatestProducts from "../../Hooks/useLatestProducts";

const LatestProducts = () => {
  const { LatestProducts, Loading } = useLatestProducts();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mt-6">
      <div data-aos="fade-up">
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center ">   <span className="gradient1"> Latest Products </span> </h2>
          <div className="gradient2 w-70"></div>
        </div>
        {Loading ? <LoadingPage></LoadingPage> :
          <div>{LatestProducts && LatestProducts.length > 0 ?
            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12"> {LatestProducts?.map((Product) => (<ProductsCard Product={Product} key={Product._id}></ProductsCard>))}
            </div> :
            <div data-aos="fade-up" className="min-h-[30vh] flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                No Products Found
              </h2>
              <p className="text-gray-500">
                Nothing to show right now. Export products to fill this space.
              </p>
            </div>}
          </div>
        }
      </div>
      {LatestProducts && LatestProducts.length > 0 ? <div data-aos="fade-up" className='flex justify-end text-amber-600 mx-10 pt-8'><Link to='/Products' className='text-emerald-600 font-semibold hover:underline text-xl' ><span className="bg-gradient-to-l from-emerald-200 via-teal-600 to-emerald-200 bg-clip-text text-transparent">All Products</span></Link></div> :
        ""}
    </div>
  );
};

export default LatestProducts;
