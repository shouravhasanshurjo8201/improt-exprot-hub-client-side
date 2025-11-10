import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";

const Home = () => {
  return (
    <div className='py-5'>
      <HeroSlider></HeroSlider>
      <LatestProducts></LatestProducts>
    </div>
  )
}

export default Home;