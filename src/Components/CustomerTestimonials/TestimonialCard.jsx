
const TestimonialCard = ({ testimonial }) => {
    return (
        <div id={testimonial.id} data-aos="fade-up" className="from-white via-emerald-50 to-blue-50 rounded-2xl shadow-md p-6 transform hover:scale-105 transition-all duration-300 ease-in-out border border-emerald-800" >
            <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="h-14 w-14 rounded-full object-cover mr-4 border-2 border-emerald-400 shadow-sm" />
                <div>
                    <h3 className="text-lg font-semibold text-emerald-600">
                        {testimonial.name}
                    </h3>
                    <p className="text-yellow-200 text-sm italic">Owner of {testimonial.company}</p>
                </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed line-clamp-3">
                {testimonial.review}
            </p>
            <div className="flex mt-3 justify-center">
                <p className="text-yellow-400 text-lg">
                    {"⭐".repeat(Math.round(testimonial.rating))}
                </p>
            </div>
            <div className="mt-4 h-[3px] bg-gradient-to-r from-emerald-400 via-yellow-300 to-transparent rounded-full"></div>
        </div>
    )
}

export default TestimonialCard;