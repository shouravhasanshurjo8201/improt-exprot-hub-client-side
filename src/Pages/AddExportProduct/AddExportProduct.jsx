import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const AddExportProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const ProductName = form.name.value;
    const ProductImage = form.image.value;
    const Price = parseFloat(form.price.value);
    const OriginCountry = form.origin_country.value;
    const Rating = parseFloat(form.rating.value);
    const AvailableQuantity = parseInt(form.available_quantity.value);

    const newProduct = {
      ProductName,
      ProductImage,
      Price,
      OriginCountry,
      Rating,
      AvailableQuantity,
      Email: user?.email,
    };

    fetch("http://localhost:3000/Products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.insertedId) {
          toast.success("Product added successfully!");
          form.reset();
          navigate("/Products"); // redirect to All Products page
        } else {
          toast.error("Failed to add product!");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-10 text-black">
      <h1 className="text-3xl font-bold text-center mb-6">
        Add Export Product
      </h1>

      <form onSubmit={handleAddProduct} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="Enter product name"
          />
        </div>

        {/* Product Image */}
        <div>
          <label className="block mb-1 font-medium">Product Image (URL)</label>
          <input
            type="url"
            name="image"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price ($)</label>
          <input
            type="number"
            name="price"
            step="0.01"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="Enter product price"
          />
        </div>

        {/* Origin Country */}
        <div>
          <label className="block mb-1 font-medium">Origin Country</label>
          <input
            type="text"
            name="origin_country"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="Enter origin country"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-1 font-medium">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="Enter product rating"
          />
        </div>

        {/* Available Quantity */}
        <div>
          <label className="block mb-1 font-medium">Available Quantity</label>
          <input
            type="number"
            name="available_quantity"
            min="1"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="Enter available quantity"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-2">
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded-lg text-white font-semibold ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Adding..." : "Add Export / Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExportProduct;
