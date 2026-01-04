import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-100 dark:bg-base-950 text-base-900 dark:text-base-100 transition-colors duration-300 px-5">

      <div className="container mx-auto pt-16 pb-8 px-5 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div data-aos="fade-up">
            <h2 className="text-2xl font-black mb-5 tracking-tight">

              <span className="text-emerald-400 font-bold">Import Export Hub</span>
            </h2>
            <p className="text-sm leading-relaxed text-base-content/70 dark:text-base-content/50 mb-6 italic">
              Connecting markets, empowering traders. Manage international inventory and scale your business with confidence.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-base-200 dark:bg-base-800 hover:bg-emerald-500 rounded-lg transition-all border border-base-300 dark:border-base-700">
                <FaFacebook size={18} className="text-base-content dark:text-base-content" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-base-200 dark:bg-base-800 hover:bg-emerald-500 rounded-lg transition-all border border-base-300 dark:border-base-700">
                <FaTwitter size={18} className="text-base-content dark:text-base-content" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-base-200 dark:bg-base-800 hover:bg-emerald-500 rounded-lg transition-all border border-base-300 dark:border-base-700">
                <FaInstagram size={18} className="text-base-content dark:text-base-content" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-base-200 dark:bg-base-800 hover:bg-emerald-500 rounded-lg transition-all border border-base-300 dark:border-base-700">
                <FaLinkedin size={18} className="text-base-content dark:text-base-content" />
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-lg font-bold mb-6 text-emerald-400 uppercase tracking-widest">Company</h2>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-base-content dark:text-base-content/80 hover:text-emerald-400 transition-all">About Us</Link></li>
              <li><Link to="/mission" className="text-base-content dark:text-base-content/80 hover:text-emerald-400 transition-all">Our Mission</Link></li>
              <li><Link to="/contact" className="text-base-content dark:text-base-content/80 hover:text-emerald-400 transition-all">Contact Us</Link></li>
              <li><Link to="/blog" className="text-base-content dark:text-base-content/80 hover:text-emerald-400 transition-all">Latest News</Link></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-lg font-bold mb-6 text-emerald-400 uppercase tracking-widest">Services</h2>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-base-content dark:text-base-content/80 hover:text-emerald-400 transition-all">All Products</Link></li>
              <li><Link to="/shipping" className="text-base-content dark:text-base-content/80 hover:text-emerald-400 transition-all">Shipping Info</Link></li>
              <li><Link to="/faq" className="text-base-content dark:text-base-content/80 hover:text-emerald-400 transition-all">Trade FAQs</Link></li>
              <li><Link to="/privacy" className="text-base-content dark:text-base-content/80 hover:text-emerald-400 transition-all">Privacy Policy</Link></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-lg font-bold mb-6 text-emerald-400 uppercase tracking-widest">Get In Touch</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-emerald-500/20 rounded-lg"><FaMapMarkerAlt className="text-emerald-400" /></div>
                <span className="text-sm text-base-content dark:text-base-content/80">
                  123 Trade Center, Export Avenue, <br /> Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-emerald-500/20 rounded-lg"><FaPhoneAlt className="text-emerald-400" /></div>
                <span className="text-sm text-base-content dark:text-base-content/80">+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-2 bg-emerald-500/20 rounded-lg"><FaEnvelope className="text-emerald-400" /></div>
                <span className="text-sm text-base-content dark:text-base-content/80">support@iehub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-base-300 dark:border-base-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-base-content/60 dark:text-base-content/50">
            © {new Date().getFullYear()} <span className="text-emerald-400 font-bold">Import Export Hub</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-base-content/60 dark:text-base-content/50 uppercase tracking-widest">
            <Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-emerald-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
