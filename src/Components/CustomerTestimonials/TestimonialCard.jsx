import {  FaStar, FaStarHalfAlt, FaRegStar, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (testimonial.rating >= i + 1) {
                stars.push(<FaStar key={i} className="text-orange-400 w-4 h-4" />);
            } else if (testimonial.rating > i && testimonial.rating < i + 1) {
                stars.push(<FaStarHalfAlt key={i} className="text-orange-400 w-4 h-4" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-gray-300 w-4 h-4" />);
            }
        }
        return stars;
    };

    return (
        <div
            id={testimonial.id}
            data-aos="fade-up"
            className="relative  rounded-xl shadow p-8 transform hover:-translate-y-2 transition-all duration-500 ease-in-out border border-emerald-100 dark:border-emerald-900/30 group"
        >
            <div className="absolute top-6 right-8 text-emerald-100 dark:text-emerald-900/20 group-hover:text-emerald-200 transition-colors">
                <FaQuoteRight size={40} />
            </div>

            <div className="flex items-center mb-6 relative z-10">
                <div className="relative">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-2xl object-cover mr-4 border-2 border-emerald-500 p-1 shadow-md group-hover:rotate-3 transition-transform"
                    />
                    <div className="absolute -bottom-1 right-2 bg-emerald-400 w-5 h-5 rounded-full flex items-center justify-center border border-white ">
                        <span className="text-[10px] text-black font-bold">✓</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-400">{testimonial.name}</h3>
                    <p className="text-emerald-600 dark:text-emerald-500/80 text-xs font-medium tracking-wide uppercase">{testimonial.company}</p>
                </div>
            </div>

            <div className="relative z-10">
                <p className="text-sm leading-relaxed italic mb-6">
                    "{testimonial.review}"
                </p>
            </div>

            {/* Stars & Verified */}
            <div className="flex items-center justify-between border-t border-emerald-50 dark:border-emerald-900/50 pt-5 mt-auto">
                <div className="flex gap-0.5">{renderStars()}</div>
                <span className="text-xs font-bold text-gray-400 dark:text-gray-600">Verified Client</span>
            </div>
        </div>
    );
};

export default TestimonialCard;
