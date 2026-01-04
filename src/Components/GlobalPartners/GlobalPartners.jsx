
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GlobalPartners = () => {
  const partners = [
    { id: 1, name: "Alibaba", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Alibaba_en_logo.svg" },
    { id: 2, name: "eBay", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg" },
    { id: 3, name: "Maersk", logo: "https://www.maersk.com/assets/images/logos/maersk-logo.svg" }, 
    { id: 4, name: "DHL", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg" },
    { id: 5, name: "FedEx", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg" },
    { id: 6, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-10 px-4 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
             <span className="gradient-text">Our Global Partners</span>
          </h2>
          <div className="section-divider w-6/12 md:w-4/12"></div>
          <p className="max-w-2xl mx-auto">
            We collaborate with world-class logistics and e-commerce giants to ensure your 
            import-export business reaches every corner of the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="zoom-in-right" className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/9f010FQk/download-6.jpg" 
                alt="Global Logistics" 
                className="w-full rounded-2xl shadow-xl object-cover transform transition duration-500 hover:scale-[1.02]"
              />
              <div className="absolute bottom-16 left-6 backdrop-blur p-4 rounded-xl shadow-lg border-l-4 border-emerald-600">
                <p className="text-emerald-800 dark:text-emerald-400 font-bold text-xl italic">200+ Countries</p>
                <p className="text-xs text-gray-600 dark:text-gray-300">Connected worldwide</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className=" p-8 md:p-12 rounded-xl border border-emerald-100 dark:border-emerald-900/30 shadow-inner">
            <h3 className="text-3xl font-bold mb-8 text-center text-emerald-500 lg:text-left ">
              Trusted by Industry Leaders
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center">
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  data-aos="fade-up" 
                  data-aos-delay={partner.id * 100}
                  className="group flex items-center justify-center p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-emerald-400 border border-transparent transition-all duration-300"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-10 md:h-12 w-full object-contain filter grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-500" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartners;