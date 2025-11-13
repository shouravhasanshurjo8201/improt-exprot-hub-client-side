import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import ProductsCard from "../../Components/Products/ProductsCard";
import useAllProducts from "../../Hooks/useAllProducts";

const Products = () => {
  const { allProducts, Loading } = useAllProducts();
  const Products = allProducts;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <div className="my-10">
      <div data-aos="fade-up">
        <div>
          <h2 className="text-4xl font-bold text-center ">   <span className="gradient1"> All Products </span> </h2>
          <div className="gradient2 w-60"></div>
        </div>
        {Loading ? <LoadingPage></LoadingPage> :
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12"> {Products.map((Product) => (<ProductsCard Product={Product} key={Product._id}></ProductsCard>))}
          </div>}
      </div>
    </div>
  );
};

export default Products;
