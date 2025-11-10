import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className='py-5'>
      <HeroSlider></HeroSlider>
      <LatestProducts></LatestProducts>
      <WhyChooseUs></WhyChooseUs>
      {/* <GlobalPartners></GlobalPartners> */}
    </div>
  )
}

export default Home;