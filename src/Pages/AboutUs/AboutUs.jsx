import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="mt-20 px-5 md:px-20">
      <div data-aos="fade-up" className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient1 mb-4">About Us</h2>
        <p className="text-blue-200 font-semibold text-lg max-w-2xl mx-auto">
          Welcome to our platform! We are committed to providing the best 
          experience for buyers and sellers around the globe. Our mission 
          is to make import-export simple, secure, and enjoyable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div data-aos="fade-right" className="bg-emerald-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 ease-in-out">
          <h3 className="text-2xl font-semibold mb-3 text-center text-emerald-600">Our Mission</h3>
          <p className="text-gray-600">
            To connect buyers and sellers worldwide, ensuring smooth and reliable trade for everyone.
          </p>
        </div>
        <div data-aos="fade-up" className="bg-emerald-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 ease-in-out">
          <h3 className="text-2xl font-semibold mb-3 text-center text-emerald-600">Our Vision</h3>
          <p className="text-gray-600">
            To become the most trusted platform for import-export management, offering real-time solutions and excellent customer support.
          </p>
        </div>
        <div data-aos="fade-left" className="bg-emerald-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 ease-in-out">
          <h3 className="text-2xl font-semibold mb-3 text-center text-emerald-600">Our Values</h3>
          <p className="text-gray-600">
            Integrity, transparency, and customer satisfaction are at the core of everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
