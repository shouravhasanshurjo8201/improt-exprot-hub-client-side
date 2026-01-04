import toast from "react-hot-toast";
import { FaStar, FaBuilding, FaUser, FaLink, FaPenNib } from "react-icons/fa";

const AddTestimonial = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const rating = parseFloat(formData.get("rating"));

        if (rating < 1 || rating > 5) {
            return toast.error("Rating must be between 1 and 5");
        }

        toast.success("Thank you! Your testimonial has been submitted.");
        e.target.reset();
    };

    return (
        <div data-aos="fade-up" >
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="relative group">
                    <FaUser className="absolute left-3 top-3.5 text-emerald-500 group-focus-within:text-emerald-600 transition-colors" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all "
                        required
                    />
                </div>

                {/* Image URL */}
                <div className="relative group">
                    <FaLink className="absolute left-3 top-3.5 text-emerald-500" />
                    <input
                        type="url"
                        name="image"
                        placeholder="Profile Image URL"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                        required
                    />
                </div>

                {/* Company */}
                <div className="relative group">
                    <FaBuilding className="absolute left-3 top-3.5 text-emerald-500" />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name (Optional)"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                    />
                </div>

                {/* Review */}
                <div className="relative group">
                    <FaPenNib className="absolute left-3 top-3.5 text-emerald-500" />
                    <textarea
                        name="review"
                        placeholder="Describe your experience..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                        required
                    />
                </div>

                {/* Rating */}
                <div className="relative group">
                    <FaStar className="absolute left-3 top-3.5 text-emerald-500" />
                    <input
                        type="number"
                        name="rating"
                        placeholder="Rating (1-5)"
                        min="1"
                        max="5"
                        step="0.1"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                        required
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="btn-primary w-full "
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default AddTestimonial;
