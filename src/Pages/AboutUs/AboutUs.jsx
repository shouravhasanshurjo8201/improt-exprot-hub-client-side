import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRocket, FaEye, FaHeart, FaGlobeAmericas, FaShieldAlt, FaUsers } from "react-icons/fa";
import useDynamicTitle from "../../Hooks/useDynamicTitle";

const AboutUs = () => {
  useDynamicTitle("About");
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    { id: 1, icon: <FaGlobeAmericas />, label: "Global Reach", value: "50+ Countries" },
    { id: 2, icon: <FaShieldAlt />, label: "Secure Trade", value: "100% Verified" },
    { id: 3, icon: <FaUsers />, label: "Happy Clients", value: "10k+" },
  ];

  const cards = [
    {
      id: 1,
      icon: <FaRocket />,
      title: "Our Mission",
      text: "To connect buyers and sellers worldwide through a digital ecosystem that ensures uninterrupted supply chains and reliable cross-border trade.",
      aos: "zoom-in-right",
    },
    {
      id: 2,
      icon: <FaEye />,
      title: "Our Vision",
      text: "To be the world’s most trusted logistics partner, offering AI-driven trade solutions and setting new standards for global marketplace integrity.",
      aos: "zoom-in-up",
    },
    {
      id: 3,
      icon: <FaHeart />,
      title: "Our Values",
      text: "Transparency and customer success are our DNA. We believe in building long-term partnerships based on mutual trust and ethical trade.",
      aos: "zoom-in-left",
    },
  ];

  return (
    <section className="py-10 px-5 md:px-10 ">

      <header data-aos="fade-down" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="gradient-text">About</span>
        </h2>
        <div className="section-divider w-6/12 md:w-4/12"></div>        <p className="text-gray-600 dark:text-gray-400 font-medium text-lg max-w-3xl mx-auto leading-relaxed">
          Welcome to our global trade hub! We bridge the gap between continents, making import-export operations{" "}
          <span className="text-emerald-600 font-bold">simple, secure, and transparent</span> for businesses of all sizes.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={card.id}
            data-aos={card.aos}
            data-aos-delay={index * 150} 
            className="group  p-8 rounded-[2.5rem] shadow-sm border border-emerald-100 dark:border-neutral-500 hover:border-emerald-500 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-600 text-3xl mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              {card.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-500 ">{card.title}</h3>
            <p className=" leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 py-1 rounded-[3rem] shadow-2xl shadow-emerald-200 dark:shadow-none grid grid-cols-1 md:grid-cols-3 gap-8 text-white px-10">
        {stats.map((stat, idx) => (
          <div
            key={stat.id}
            data-aos="fade-up"
            data-aos-delay={idx * 200} 
            className="flex flex-col items-center text-center space-y-2"
          >
            <div className="text-4xl text-emerald-500">{stat.icon}</div>
            <h4 className="text-3xl text-gray-400 font-black">{stat.value}</h4>
            <p className="uppercase tracking-widest text-gray-500 text-xs font-bold ">{stat.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AboutUs;
