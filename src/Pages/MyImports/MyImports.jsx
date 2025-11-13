import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingPage from "../LoadingPage/LoadingPage";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const MyImports = () => {
    const { user, loading } = useContext(AuthContext);
    const [imports, setImports] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch user's imported products
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/Products/ImporterEmail/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setImports(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                });
        }
    }, [user?.email]);

    // Handle Remove
    const handleRemove = (id) => {
        if (confirm("Are you sure you want to remove this product?")) {
            fetch(`http://localhost:3000/Products/Delete/${id}`, {
                method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success("Removed successfully!");
                    const newData = imports.filter((item) => item._id !== id);
                    setImports(newData);
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to remove item!");
            });
        }
    };

    if (loading || isLoading) {
        return <LoadingPage />;
    }

    if (imports.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                    No Imported Products Found 
                </h2>
                <p className="text-gray-500">
                    Import products from the Product Details page to see them here.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">
                My Imported Products
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {imports.map((item) => (
                    <div
                        key={item._id}
                        className="border bg-background4 rounded-2xl shadow-md p-4 hover:shadow-lg transition"
                    >
                        <img
                            src={item.image}
                            alt={item.ProductName}
                            className="w-full h-48 object-cover rounded-xl mb-3"
                        />
                        <h2 className="text-xl font-semibold mb-1">{item.ProductName}</h2>
                        <p className="text-gray-600">💲 Price: ${item.Price}</p>
                        <p className="text-gray-600">⭐ Rating: {item.Rating}</p>
                        <p className="text-gray-600">
                            🌍 Origin: {item.OriginCountry}
                        </p>
                        <p className="text-gray-700 font-medium mt-2">
                            Imported Quantity:{" "}
                            <span className="text-blue-600">{item.AvailableQuantity}</span>
                        </p>

                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => handleRemove(item._id)}
                                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                            >
                                Remove
                            </button>

                            <Link
                                to={`/Products/${item._id}`}
                                className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
                            >
                                See Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyImports;
