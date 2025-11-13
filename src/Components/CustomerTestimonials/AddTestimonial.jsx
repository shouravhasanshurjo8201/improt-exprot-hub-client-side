import toast from "react-hot-toast";
const AddTestimonial = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("New testimonial added");
        e.target.reset();
    };
    return (
        <div data-aos="fade-up" className=" rounded-2xl shadow-md p-6 max-w-md mx-auto border border-emerald-800" >
            <h2 className="text-center text-2xl font-bold gradient1 mb-4">
                Give Your Review
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3 text-fuchsia-100">
                <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400" required />
                <input type="text" name="image" placeholder="Image URL" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400" required />
                <input type="text" name="company" placeholder="Company Name" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                <textarea name="review" placeholder="Write your review..." className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 h-24 resize-none" required ></textarea>
                <input type="number" name="rating" placeholder="Rating (1-5)" min="1" max="5" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400" required />
                <button type="submit" className="btn-primary w-full ml-0" > Add Testimonial </button>
            </form>
        </div>
    )
}

export default AddTestimonial