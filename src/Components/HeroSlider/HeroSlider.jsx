
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";

const HeroSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const slides = [
    {
      img: "https://i.postimg.cc/76q5CNLv/download-14.jpg",
      title: "Your Gateway to International Trade",
      desc: "Connect with trusted exporters and importers in just one click.",
    },
    {
      img: "https://i.postimg.cc/jj7H6vKM/download-15.jpg",
      title: "Discover Global Opportunities",
      desc: "Explore products from around the world and grow your business.",
    },
    {
      img: "https://i.postimg.cc/4ymNt2R4/download-17.jpg",
      title: "Manage Imports with Ease",
      desc: "Track, organize, and expand your operations seamlessly.",
    },
    {
      img: "https://i.postimg.cc/WpCsCnP2/download-16.jpg",
      title: "Export Smarter, Not Harder",
      desc: "Simplify your global trade with modern tools and real-time updates.",
    }
  ];

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        loop={true}
        className="mySwiper h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-in-out animate-slow-zoom"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="max-w-3xl space-y-5">
                    <h1
                      data-aos="fade-right"
                      className="text-4xl md:text-6xl font-black text-white leading-tight"
                    >
                      {slide.title}
                    </h1>
                    <p
                      data-aos="fade-right"
                      data-aos-delay="200"
                      className="text-lg md:text-xl text-gray-200 font-medium max-w-xl"
                    >
                      {slide.desc}
                    </p>
                    <div data-aos="fade-up" data-aos-delay="400" className="pt-4 flex gap-4 flex-wrap">
                      <Link to="/Products" className="btn-primary !py-4">
                        Explore Marketplace
                      </Link>
                      <Link to="/AddExportProduct" className="btn-secondary !bg-white/10 text-white backdrop-blur-md hover:!bg-white/20 !py-4">
                        Start Exporting
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Scroll Down</span>
        <div className="w-[4px] h-12 bg-gradient-to-b from-emerald-500 to-transparent animate-bounce"></div>
      </div>
    </div>
  );
};

export default HeroSlider;
