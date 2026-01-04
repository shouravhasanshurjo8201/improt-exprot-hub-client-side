
import { FaShieldAlt, FaShippingFast, FaHandshake, FaGlobe } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      id: 1,
      icon: <FaShippingFast className="text-4xl text-blue-500 group-hover:scale-110 transition-transform" />,
      title: "Fast & Secure Delivery",
      description: "Get your products delivered quickly and safely with our trusted global logistics network.",
      bg: "bg-blue-50 dark:bg-blue-900/10",
      border: "border-blue-100 dark:border-blue-800"
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-4xl text-emerald-500 group-hover:scale-110 transition-transform" />,
      title: "Verified Exporters",
      description: "All exporters are verified to ensure authentic and reliable trade for every user.",
      bg: "bg-emerald-50 dark:bg-emerald-900/10",
      border: "border-emerald-100 dark:border-emerald-800"
    },
    {
      id: 3,
      icon: <FaGlobe className="text-4xl text-purple-500 group-hover:scale-110 transition-transform" />,
      title: "Global Marketplace",
      description: "Explore thousands of international products and expand your business globally.",
      bg: "bg-purple-50 dark:bg-purple-900/10",
      border: "border-purple-100 dark:border-purple-800"
    },
    {
      id: 4,
      icon: <FaHandshake className="text-4xl text-orange-500 group-hover:scale-110 transition-transform" />,
      title: "Easy Partnerships",
      description: "Build trusted trade partnerships and import/export effortlessly in one click.",
      bg: "bg-orange-50 dark:bg-orange-900/10",
      border: "border-orange-100 dark:border-orange-800"
    }
  ];

  return (
    <section className="py-10 px-4 ">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
             <span className="gradient-text">Why Choose Import Export Hub?</span>
          </h2>
          <div className="section-divider w-4/12 md:w-6/12"></div>
          <p className="max-w-xl mx-auto">
            We provide a secure and efficient ecosystem for international trade, making global business accessible to everyone.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="relative">
              
              <img 
                src="https://oneunionsolutions.com/wp-content/uploads/2024/09/Scaling-Your_-898-_Blog-img-2.webp" 
                alt="Logistics" 
                className="w-full rounded-xl shadow border border-white dark:border-neutral ring-1 ring-emerald-100" 
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-50 p-6 rounded-2xl shadow-xl border border-emerald-50 hidden md:block">
                <p className="text-3xl font-bold text-emerald-600">100%</p>
                <p className="text-sm font-medium text-gray-500">Secure Trade</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.id}
                data-aos="fade-up"
                data-aos-delay={feature.id * 100}
                className={`group p-8 rounded-xl border ${feature.border} ${feature.bg} hover:shadow transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3  group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                <p className=" text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;