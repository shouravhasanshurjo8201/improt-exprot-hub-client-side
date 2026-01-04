// // import TestimonialCard from "./TestimonialCard";
// // import { useEffect } from "react";
// // import "aos/dist/aos.css";
// // import AOS from "aos";
// // import AddTestimonial from "./AddTestimonial";

// // const testimonialsData = [
// //   {
// //     id: 1,
// //     name: "Mahmud Hossain",
// //     company: "Global Textile Ltd.",
// //     review:
// //       "Import Export Hub helped us expand our product reach worldwide. The platform is super easy to use, and the order tracking system is excellent!",
// //     image: "https://i.postimg.cc/9QhXB6hh/download-5.jpg",
// //     rating: 5,
// //   },
// //   {
// //     id: 2,
// //     name: "Sarah Rahman",
// //     company: "Ocean Trade Bangladesh",
// //     review:
// //       "I was able to import goods from Europe smoothly using this platform. The real-time data updates and fast performance are just amazing!",
// //     image: "https://i.postimg.cc/6QhXzqhj/download-4.jpg",
// //     rating: 4.8,
// //   },
// //   {
// //     id: 3,
// //     name: "Tanvir Ahmed",
// //     company: "AgroFresh Exports",
// //     review:
// //       "The export management feature is a game changer! I can easily add new products and manage everything from the My Exports dashboard.",
// //     image: "https://i.postimg.cc/rsZyjsMB/download-3.jpg",
// //     rating: 5,
// //   },
// //   {
// //     id: 4,
// //     name: "Nusrat Jahan",
// //     company: "Rajshahi Craft World",
// //     review:
// //       "I export local handicrafts internationally. Import Export Hub makes it easy to manage shipments, payments, and product updates in one place!",
// //     image: "https://i.postimg.cc/yx1Wn29R/download-2.jpg",
// //     rating: 4.9,
// //   },
// // ];

// // const CustomerTestimonials = () => {
// //   useEffect(() => {
// //     AOS.init({ duration: 2000 });
// //   }, []);

// //   return (
// //     <div data-aos="fade-up" className=" px-4 pb-10 mb-[-18px] rounded-xl">
// //       <div data-aos="fade-up">
// //         <h2 className="text-4xl font-bold text-center ">   <span className="gradient1"> What Our Customers Say </span> </h2>
// //         <div className="gradient2 w-full md:w-110"></div>
// //       </div>
// //       <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-10">
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {testimonialsData.map((testimonial) => (
// //             <TestimonialCard testimonial={testimonial} key={testimonial.id}></TestimonialCard>
// //           ))}
// //         </div>
// //         <div data-aos="fade-left" className="w-full">
// //           <AddTestimonial></AddTestimonial>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CustomerTestimonials;


// import TestimonialCard from "./TestimonialCard";
// import { useEffect } from "react";
// import "aos/dist/aos.css";
// import AOS from "aos";
// import AddTestimonial from "./AddTestimonial";

// const testimonialsData = [
//   {
//     id: 1,
//     name: "Mahmud Hossain",
//     company: "Global Textile Ltd.",
//     review: "Import Export Hub helped us expand our product reach worldwide. The platform is super easy to use, and the order tracking system is excellent!",
//     image: "https://i.postimg.cc/9QhXB6hh/download-5.jpg",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Sarah Rahman",
//     company: "Ocean Trade Bangladesh",
//     review: "I was able to import goods from Europe smoothly using this platform. The real-time data updates and fast performance are just amazing!",
//     image: "https://i.postimg.cc/6QhXzqhj/download-4.jpg",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Tanvir Ahmed",
//     company: "AgroFresh Exports",
//     review: "The export management feature is a game changer! I can easily add new products and manage everything from the My Exports dashboard.",
//     image: "https://i.postimg.cc/rsZyjsMB/download-3.jpg",
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: "Nusrat Jahan",
//     company: "Rajshahi Craft World",
//     review: "I export local handicrafts internationally. Import Export Hub makes it easy to manage shipments, payments, and product updates in one place!",
//     image: "https://i.postimg.cc/yx1Wn29R/download-2.jpg",
//     rating: 4.9,
//   },
// ];

// const CustomerTestimonials = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true }); // Duration optimized for better UX
//   }, []);

//   return (
//     <section className="py-20 px-4 bg-background2">
//       <div className="container mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16" data-aos="fade-up">
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
//             What Our <span className="gradient-text">Customers Say</span>
//           </h2>
//           <div className="section-divider"></div>
//           <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
//             Real stories from global traders who have transformed their businesses using our platform.
//           </p>
//         </div>

//         <div className="flex flex-col xl:flex-row items-start gap-12">
//           {/* Testimonials Grid (Left Side) */}
//           <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-right">
//             {testimonialsData.map((testimonial) => (
//               <div 
//                 key={testimonial.id}
//                 className="bg-white dark:bg-neutral p-6 rounded-2xl shadow-sm border border-emerald-50 dark:border-emerald-900/20 hover:shadow-xl transition-all duration-300 group"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="relative">
//                      <img 
//                       src={testimonial.image} 
//                       alt={testimonial.name} 
//                       className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 p-0.5" 
//                     />
//                     <span className="absolute -bottom-1 -right-1 bg-emerald-600 text-white text-[10px] px-1.5 rounded-full border border-white">Verified</span>
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-lg group-hover:text-emerald-600 transition-colors">{testimonial.name}</h4>
//                     <p className="text-xs text-emerald-600 font-medium">{testimonial.company}</p>
//                   </div>
//                 </div>

//                 {/* Dynamic Stars */}
//                 <div className="flex gap-1 mb-3">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'text-orange-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>

//                 <p className="text-gray-600 dark:text-gray-300 italic text-sm leading-relaxed">
//                   "{testimonial.review}"
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Add Testimonial Form (Right Side) */}
//           <div className="w-full xl:w-1/3 sticky top-24" data-aos="fade-left">
//             <div className="bg-emerald-700 p-1 rounded-3xl shadow-2xl">
//                 <div className="bg-white dark:bg-neutral p-8 rounded-[1.4rem]">
//                     <h3 className="text-2xl font-bold mb-2 text-emerald-900 dark:text-emerald-100 italic">Share Your Experience</h3>
//                     <p className="text-sm text-gray-500 mb-6">Your feedback helps us improve the platform for traders worldwide.</p>
//                     <AddTestimonial />
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerTestimonials;


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
