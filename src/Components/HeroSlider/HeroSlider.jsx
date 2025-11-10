import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import AOS from "aos";
import "swiper/css";
import { Link } from "react-router";

const HeroSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const ButtonLink = (<>
    <Link to='/Products' className="btn btn-outline btn-accent bg-emerald-600 text-white font-bold border-none relative mx-4 py-2 px-8 text-base overflow-hidden transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-600 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] rounded-[15px] hover:before:left-0 cursor-pointer">Explore More Destinations</Link>
  </>)
  return (
    <div data-aos="fade-up" className="w-full h-[420px] relative">
      <Swiper modules={[Pagination, Navigation, Autoplay]} spaceBetween={30} centeredSlides={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} pagination={{ clickable: true }} navigation={true} className="mySwiper rounded-2xl">
        {/* --- Slide 1 --- */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <img src="https://i.postimg.cc/jj7H6vKM/download-15.jpg" alt="Pet Care" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
                Your Gateway to International Trade
              </h1>
              <p className="text-lg max-w-2xl text-center">
                Connect with trusted exporters and importers in just one click
              </p>
              <div className="my-5">{ButtonLink}</div>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 2 --- */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <img src="https://i.postimg.cc/76q5CNLv/download-14.jpg" alt="Cozy Cat" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
                Discover Global Opportunities
              </h1>
              <p className="text-lg max-w-2xl text-center">
                Explore products from around the world and grow your import-export business
              </p>
              <div className="my-5">{ButtonLink}</div>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 3 --- */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <img src="https://i.postimg.cc/4ymNt2R4/download-17.jpg" alt="Happy Dog" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
                Manage Imports with Ease
              </h1>
              <p className="text-lg max-w-2xl text-center">
                Track, organize, and expand your business operations seamlessly.
              </p>
              <div className="my-5">{ButtonLink}</div>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 4 --- */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <img src="https://i.postimg.cc/WpCsCnP2/download-16.jpg" alt="Pet Accessories" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
                Export Smarter, Not Harder
              </h1>
              <p className="text-lg max-w-2xl text-center">
                Simplify your global trade with modern tools and real-time updates.
              </p>
              <div className="my-5">{ButtonLink}</div>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 5 --- */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <img src="https://i.postimg.cc/dDcP15q2/download-18.jpg" alt="Pet Snuggles" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
                Find the Best Global Deals
              </h1>
              <p className="text-lg max-w-2xl text-center">
                Compare prices, quality, and suppliers from multiple countries
              </p>
              <div className="my-5">{ButtonLink}</div>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 6 --- */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <img src="https://i.postimg.cc/NMWf67sk/images-5.jpg" alt="Happy Pet Family" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
                Grow Beyond Borders
              </h1>
              <p className="text-lg max-w-2xl text-center">
                Expand your reach to new markets and connect with global customers.
              </p>
              <div className="my-5">{ButtonLink}</div>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 7 --- */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <img src="https://i.postimg.cc/QtWjd9QN/download-19.jpg" alt="Pet Clothes" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
                Secure & Reliable Transactions
              </h1>
              <p className="text-lg max-w-2xl text-center">
                Experience safe, verified, and transparent trade operations.
              </p>
              <div className="my-5">{ButtonLink}</div>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 8 --- */}
        <SwiperSlide>
          <div className="relative w-full h-[300px] md:h-[400px]">
            <img src="https://i.postimg.cc/pdmHsh1f/images-6.jpg" alt="Pet Grooming" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center">
                Build Your International Network.
              </h1>
              <p className="text-lg max-w-2xl text-center">
                Join a community of exporters and importers from all over the world.
              </p>
              <div className="my-5">{ButtonLink}</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
