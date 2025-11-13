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
    review:
      "Import Export Hub helped us expand our product reach worldwide. The platform is super easy to use, and the order tracking system is excellent!",
    image: "https://i.postimg.cc/9QhXB6hh/download-5.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Rahman",
    company: "Ocean Trade Bangladesh",
    review:
      "I was able to import goods from Europe smoothly using this platform. The real-time data updates and fast performance are just amazing!",
    image: "https://i.postimg.cc/6QhXzqhj/download-4.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    company: "AgroFresh Exports",
    review:
      "The export management feature is a game changer! I can easily add new products and manage everything from the My Exports dashboard.",
    image: "https://i.postimg.cc/rsZyjsMB/download-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    company: "Rajshahi Craft World",
    review:
      "I export local handicrafts internationally. Import Export Hub makes it easy to manage shipments, payments, and product updates in one place!",
    image: "https://i.postimg.cc/yx1Wn29R/download-2.jpg",
    rating: 4.9,
  },
];

const CustomerTestimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" className=" px-4 pb-10 mb-[-18px] rounded-xl">
      <div data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center ">   <span className="gradient1"> What Our Customers Say </span> </h2>
        <div className="gradient2 w-full md:w-110"></div>
      </div>
      <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id}></TestimonialCard>
          ))}
        </div>
        <div data-aos="fade-left" className="w-full">
          <AddTestimonial></AddTestimonial>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
