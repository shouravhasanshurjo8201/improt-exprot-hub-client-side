
import TestimonialCard from "./TestimonialCard";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import AddTestimonial from "./AddTestimonial";

const testimonialsData = [
  {
    id: 1,
    name: "Mahmud Hossain",
    company: "Global Textile Ltd.",
    review: "Import Export Hub helped us expand our product reach worldwide. The platform is super easy to use, and the order tracking system is excellent!",
    image: "https://i.postimg.cc/9QhXB6hh/download-5.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Rahman",
    company: "Ocean Trade Bangladesh",
    review: "I was able to import goods from Europe smoothly using this platform. The real-time data updates and fast performance are just amazing!",
    image: "https://i.postimg.cc/6QhXzqhj/download-4.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    company: "AgroFresh Exports",
    review: "The export management feature is a game changer! I can easily add new products and manage everything from the My Exports dashboard.",
    image: "https://i.postimg.cc/rsZyjsMB/download-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    company: "Rajshahi Craft World",
    review: "I export local handicrafts internationally. Import Export Hub makes it easy to manage shipments, payments, and product updates in one place!",
    image: "https://i.postimg.cc/yx1Wn29R/download-2.jpg",
    rating: 4.9,
  },
];

const CustomerTestimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
             <span className="gradient-text">What Our Customers Say</span>
          </h2>
          <div className="section-divider w-4/12 md:w-6/12"></div>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Real stories from global traders who have transformed their businesses using our platform.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-start gap-12">
          {/* Testimonials Grid */}
          <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-right">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Add Testimonial Form */}
          <div className="w-full xl:w-1/3 xl:sticky xl:top-24" data-aos="fade-left">
            <div className=" p-1 rounded-3xl shadow">
              <div className=" p-5 rounded-[1.4rem]">
                <h3 className="text-2xl font-bold mb-2 text-emerald-500 italic">
                  Share Your Experience
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Your feedback helps us improve the platform for traders worldwide.
                </p>
                <AddTestimonial />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
