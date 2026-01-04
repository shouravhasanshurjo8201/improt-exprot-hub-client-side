import useDynamicTitle from "../../Hooks/useDynamicTitle";
import { FaCookieBite, FaShieldAlt, FaInfoCircle, } from "react-icons/fa";

const CookiesPolicy = () => {
    useDynamicTitle("Cookies Policy");

    return (
        <div className="min-h-screen text-base-content transition-all duration-300">
            <div className="container mx-auto px-5 py-10">

                <div className="mb-12 text-center" data-aos="fade-down">
                    <div className="inline-block p-3 bg-base-100 dark:bg-base-200 rounded-full mb-4">
                        <FaCookieBite className="text-4xl text-emerald-500" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        Cookies <span className="text-emerald-500">Policy</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We value your privacy. This policy explains how we use cookies to improve your
                        trading experience on the Import Export Hub.
                    </p>
                    <div className="section-divider"></div>
                </div>

                <div className="space-y-8">

                    <section className="custom-card p-8 shadow group" data-aos="fade-up">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500 text-white font-bold">1</span>
                            <h2 className="text-2xl font-bold text-emerald-500 dark:text-emerald-500">What Are Cookies?</h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-500 leading-relaxed pl-14">
                            Cookies are small text files stored on your device when you visit a website.
                            They help the website remember your preferences, login status, and improve
                            overall user experience.
                        </p>
                    </section>

                    <section className="custom-card shadow p-8" data-aos="fade-up" data-aos-delay="100">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500 text-white font-bold">2</span>
                            <h2 className="text-2xl font-bold dark:text-emerald-500">Why We Use Cookies</h2>
                        </div>
                        <div className="pl-14">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "To keep you logged in securely",
                                    "To remember your theme (Dark/Light)",
                                    "To analyze site performance",
                                    "To personalize your dashboard"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-500">
                                        <FaShieldAlt className="text-emerald-500" size={14} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="custom-card shadow p-8" data-aos="fade-up">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500 text-white font-bold">3</span>
                            <h2 className="text-2xl font-bold dark:text-emerald-500">Types of Cookies We Use</h2>
                        </div>

                        <div className="pl-5 md:pl-16 space-y-6">
                            <div className="p-4 bg-base-200 dark:bg-base-100 rounded-xl border-l-4 border-emerald-500">
                                <h3 className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">Essential Cookies</h3>
                                <p className="text-sm opacity-80">Required for basic site functionality like authentication and security.</p>
                            </div>

                            <div className="p-4 bg-base-200 dark:bg-base-100 rounded-xl border-l-4 border-teal-500">
                                <h3 className="font-bold text-teal-600 dark:text-teal-400 mb-1">Performance Cookies</h3>
                                <p className="text-sm opacity-80">Help us understand how users interact with the website so we can improve it.</p>
                            </div>

                            <div className="p-4 bg-base-200 dark:bg-base-100 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-1">Functional Cookies</h3>
                                <p className="text-sm opacity-80">Remember user preferences such as your language or region settings.</p>
                            </div>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <section className="custom-card p-8 shadow-md" data-aos="zoom-in">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <FaInfoCircle className="text-emerald-500" /> Managing Cookies
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed">
                                You can control or delete cookies through your browser settings.
                                Note: Disabling them may limit some site features.
                            </p>
                        </section>

                        <section className="custom-card p-8 shadow-md" data-aos="zoom-in">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <FaShieldAlt className="text-emerald-500" /> Policy Updates
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed">
                                We may update this policy periodically. Please check this page
                                regularly for any changes. Last updated: 2026.
                            </p>
                        </section>
                    </div>

                    <section className=" rounded-3xl p-10 text-center shadow overflow-hidden relative" data-aos="fade-up">
                        <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                        <p className="mb-6 opacity-90 max-w-lg mx-auto">
                            If you have any doubts about our cookies or how your data is handled, our support team is here to help.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                            <a href="mailto:support@iehub.com" className="btn bg-white text-emerald-700 hover:bg-emerald-50 border-none font-bold px-8 rounded-full">
                                <span className="btn-primary" >support@iehub.com</span>
                            </a>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default CookiesPolicy;