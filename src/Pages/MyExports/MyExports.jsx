import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";
import LoadingPage from "../LoadingPage/LoadingPage";

const MyExports = () => {
  const { user, loading } = useContext(AuthContext);
  const [exports, setExports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/Products/ExporterEmail/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setExports(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      fetch(`http://localhost:3000/Products/Delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Product deleted successfully!");
            setExports(exports.filter((item) => item._id !== id));
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to delete product!");
        });
    }
  };

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    document.getElementById("update_modal").showModal();
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedProduct = {
      ProductName: form.name.value,
      ProductImage: form.image.value,
      Price: parseFloat(form.price.value),
      OriginCountry: form.origin_country.value,
      Rating: parseFloat(form.rating.value),
      AvailableQuantity: parseInt(form.available_quantity.value),
    };

    fetch(`http://localhost:3000/Products/Put/${selectedProduct._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Product updated successfully!");
          const updatedList = exports.map((item) =>
            item._id === selectedProduct._id
              ? { ...item, ...updatedProduct }
              : item
          );
          setExports(updatedList);
          document.getElementById("update_modal").close();
        } else {
          toast.error("No changes found");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Update failed");
      });
  };

  if (loading || isLoading) {
    return <LoadingPage />;
  }

  if (exports.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">
          No Exported Products Found 😕
        </h2>
        <p className="text-gray-500">
          Add some export products to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="my-8 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">
        My Exported Products
      </h1>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12  ">
        {exports.map((item) => (
          <div
            key={item._id}
            className="border bg-background4 rounded-2xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={item.ProductImage}
              alt={item.ProductName}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h2 className="text-xl text-black font-semibold mb-1">{item.ProductName}</h2>
            <p className="text-gray-600">💲 Price: ${item.Price}</p>
            <p className="text-gray-600">⭐ Rating: {item.Rating}</p>
            <p className="text-gray-600">🌍 Origin: {item.OriginCountry}</p>
            <p className="text-gray-700 font-medium mt-2">
              Available Quantity:{" "}
              <span className="text-blue-600">{item.AvailableQuantity}</span>
            </p>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>

              <button
                onClick={() => handleUpdate(item)}
                className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

      {/*  Update Modal */}
      <dialog id="update_modal" className="modal">
        <div className="modal-box max-w-lg bg-background4">
          <h3 className="font-bold text-xl mb-4 text-center">
            Update Product Information
          </h3>

          {selectedProduct && (
            <form onSubmit={handleUpdateSubmit} className="space-y-3 text-white">
              <input
                type="text"
                name="name"
                defaultValue={selectedProduct.ProductName}
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="url"
                name="image"
                defaultValue={selectedProduct.ProductImage}
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="number"
                name="price"
                defaultValue={selectedProduct.Price}
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="text"
                name="origin_country"
                defaultValue={selectedProduct.OriginCountry}
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                step="0.1"
                defaultValue={selectedProduct.Rating}
                required
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="number"
                name="available_quantity"
                min="1"
                defaultValue={selectedProduct.AvailableQuantity}
                required
                className="w-full border px-3 py-2 rounded-lg"
              />

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("update_modal").close()
                  }
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default MyExports;
