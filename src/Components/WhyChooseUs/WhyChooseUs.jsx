import { FaShieldAlt, FaShippingFast, FaHandshake, FaGlobe } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" className="py-10 text-center">
      <div data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center ">   <span className="gradient1"> Why Choose Import Export Hub? </span> </h2>
        <div className="gradient2 w-full md:w-150"></div>
      </div>

      <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div data-aos="fade-right" className="w-full">
          <img src="https://oneunionsolutions.com/wp-content/uploads/2024/09/Scaling-Your_-898-_Blog-img-2.webp" alt="" className="w-full rounded-2xl" />
        </div>
        <div data-aos="fade-up" className="grid md:grid-cols-2 w-full gap-6">
          <div data-aos="fade-up" className="p-6 bg-yellow-50 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaShippingFast className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl text-emerald-500 font-semibold mb-2">Fast & Secure Delivery</h3>
            <p className="text-gray-800 text-sm">
              Get your products delivered quickly and safely with our trusted global logistics network.
            </p>
          </div>

          <div data-aos="fade-up" className="p-6 bg-yellow-50 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaShieldAlt className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl text-emerald-600 font-semibold mb-2">Verified Exporters</h3>
            <p className="text-gray-600 text-sm">
              All exporters are verified to ensure authentic and reliable trade for every user.
            </p>
          </div>

          <div data-aos="fade-up" className="p-6 bg-yellow-50 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaGlobe className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl text-emerald-600 font-semibold mb-2">Global Marketplace</h3>
            <p className="text-gray-600 text-sm">
              Explore thousands of international products and expand your business globally.
            </p>
          </div>

          <div data-aos="fade-up" className="p-6 bg-yellow-50 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaHandshake className="text-4xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl text-emerald-600 font-semibold mb-2">Easy Partnerships</h3>
            <p className="text-gray-600 text-sm">
              Build trusted trade partnerships and import/export effortlessly in one click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
