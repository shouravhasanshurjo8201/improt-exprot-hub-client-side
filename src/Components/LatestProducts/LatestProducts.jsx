import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import useServiceData from "../../Hooks/UseServiceData";
import LoadingPage from "../../Pages/LoadingPage/LoadingPage";
import ProductsCard from "../Products/ProductsCard";

const LatestProducts = () => {
  const { jsonData, Loading } = useServiceData();
  const servicesDataSlice = jsonData.slice(2,8);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <div className="mt-6">
      <div data-aos="fade-up">
        <h2 className="text-4xl font-bold text-emerald-500 text-center mb-10">Latest Products</h2>
        {Loading ? <LoadingPage></LoadingPage> :
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12"> {servicesDataSlice.map((Product) => (<ProductsCard Product={Product} key={Product._id}></ProductsCard>))}
          </div>}
      </div>
      {Loading ? "" :
        <div className='flex justify-end text-amber-600 mx-10 pt-8'><Link to='services' data-aos="fade-up" className='text-emerald-600 font-semibold hover:underline text-xl' > All Products</Link></div>}
    </div>
  );
};

export default LatestProducts;
