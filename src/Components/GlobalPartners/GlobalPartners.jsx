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

  return (
    <div className="py-16 px-4">
      <div className=" text-center">
        <h2 className="text-3xl font-bold mb-8 text-emerald-600">
          Our Global Partners
        </h2>
        <p className="text-black mb-10">
          Trusted by world-class logistics and export organizations.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-4 rounded-xl hover:shadow-md transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalPartners;
