import CustomerTestimonials from "../../Components/CustomerTestimonials/CustomerTestimonials";
import GlobalPartners from "../../Components/GlobalPartners/GlobalPartners";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className='py-5'>
      <HeroSlider></HeroSlider>
      <LatestProducts></LatestProducts>
      <WhyChooseUs></WhyChooseUs>
      <CustomerTestimonials></CustomerTestimonials>
      <GlobalPartners></GlobalPartners>
    </div>
  )
}

export default Home;