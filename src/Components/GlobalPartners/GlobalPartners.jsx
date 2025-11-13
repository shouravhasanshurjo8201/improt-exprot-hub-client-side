import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GlobalPartners = () => {
  const partners = [
    {
      id: 1,
      name: "Alibaba",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
    },
    {
      id: 2,
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      id: 3,
      name: "eBay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
    },
    {
      id: 4,
      name: "DHL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      id: 5,
      name: "FedEx",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
    },
    {
      id: 6,
      name: "Maersk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-16 px-4 ">
      <div className=" text-center">
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center ">   <span className="gradient1"> Our Global Partners </span> </h2>
          <div className="gradient2 w-80"></div>
        </div>
        <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div data-aos="fade-right" className="w-full">
            <img src="https://i.postimg.cc/9f010FQk/download-6.jpg" alt="" className="w-full rounded-2xl" />
          </div>
          <div data-aos="fade-up" className="w-full border p-5 border-emerald-800 rounded-2xl">
            <p className="gradient1 font-bold mb-6">
              Trusted by world-class logistics and export organizations.
            </p>
            <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-6 items-center justify-center ">
              {partners.map((partner) => (
                <div key={partner.id} data-aos="fade-up" className="flex items-center justify-center p-4 rounded-xl hover:shadow-md transition" >
                  <img src={partner.logo} alt={partner.name} className="h-15 object-contain grayscale hover:grayscale-0 transition" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPartners;
