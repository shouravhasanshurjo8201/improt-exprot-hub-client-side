import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialCard from "./TestimonialCard";
const testimonialsData = [
  {
    id: 1,
    name: "Alice Brown",
    pet: "Retriever - Max",
    review:
      "WarmPaws helped me keep Max cozy this winter! The winter coat fitting service was perfect.",
    image: "https://i.postimg.cc/Qt0KHL5L/download.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Amit Das",
    pet: "Bulldog - Rocky",
    review:
      "Rocky loved the winter spa treatment! His fur looks shiny and he’s much more playful now. Highly recommended!",
    image: "https://i.postimg.cc/rmnzq16B/download-1.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Lisa Rahman",
    pet: "Persian Cat - Milo",
    review:
      "The vet consultation was amazing! They gave me perfect winter diet advice for Milo. WarmPaws truly cares for pets.",
    image: "https://i.postimg.cc/wTJJQrYV/download-2.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Rafiul Hasan",
    pet: "Husky - Snowy",
    review:
      "Snowy used to get cold easily, but after WarmPaws’ winter grooming and coat fitting, he’s full of energy and comfort. Great service!",
    image: "https://i.postimg.cc/L6ZhMgxC/download-3.jpg",
    rating: 4.8,
  },

];

const CustomerTestimonials = () => {
     useEffect(() => {
            AOS.init({ duration: 2000 });
        }, []);
  return (
    <div data-aos="fade-up" className=" px-4 pb-10 mb-[-18px] rounded-xl">
      <h2 className="text-3xl font-bold text-emerald-500 mb-8 text-center">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial.id}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
