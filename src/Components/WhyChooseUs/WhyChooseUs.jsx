import { FaShieldAlt, FaShippingFast, FaHandshake, FaGlobe } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-10 text-emerald-600">
          Why Choose Import Export Hub?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fast Shipping */}
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaShippingFast className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl text-emerald-600 font-semibold mb-2">Fast & Secure Delivery</h3>
            <p className="text-gray-800 text-sm">
              Get your products delivered quickly and safely with our trusted global logistics network.
            </p>
          </div>

          {/* Verified Traders */}
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaShieldAlt className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl text-emerald-600 font-semibold mb-2">Verified Exporters</h3>
            <p className="text-gray-600 text-sm">
              All exporters are verified to ensure authentic and reliable trade for every user.
            </p>
          </div>

          {/* Global Market */}
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaGlobe className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl text-emerald-600 font-semibold mb-2">Global Marketplace</h3>
            <p className="text-gray-600 text-sm">
              Explore thousands of international products and expand your business globally.
            </p>
          </div>

          {/* Easy Partnership */}
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <FaHandshake className="text-4xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl text-emerald-600 font-semibold mb-2">Easy Partnerships</h3>
            <p className="text-gray-600 text-sm">
              Build trusted trade partnerships and import/export effortlessly in one click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
