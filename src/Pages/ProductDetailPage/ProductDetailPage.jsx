import { useParams, useLocation, Navigate, useNavigate } from "react-router";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import LoadingPage from "../LoadingPage/LoadingPage";
import PageNotFound from "../PageNotFound/PageNotFound";
import { AuthContext } from "../../Context/AuthContext";
import useAllProducts from "../../Hooks/useAllProducts";

const ProductDetailPage = () => {
    const [importQuantity, setImportQuantity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const { allProducts, Loading } = useAllProducts();
    const navigate = useNavigate();
    const location = useLocation();
    const Products = allProducts.find((item) => item._id === id);

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!Products) {
        return <PageNotFound />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedProduct = {
            importQuantity: importQuantity,
            importerEmail: user?.email
        };

        try {
            const res = await fetch(`http://localhost:3000/Products/Patch/${Products._id?.toString()}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success(`Updated ${Products.ProductName} successfully!`);
                setIsModalOpen(false);
                setTimeout(() => {
                    navigate("/MyImports");
                }, 1000);
            } else {
                toast.error("Update failed!");
            }
        } catch (error) {
            console.error("Update error:", error);
            toast.error("Something went wrong!");
        }
    };


    return (
        <div className=" min-h-screen py-10">
            {Loading ? (
                <LoadingPage />
            ) : (
                <div className="max-w-5xl mx-auto p-6 bg-background1 rounded-2xl shadow-lg text-gray-800">

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-5/12 flex justify-center items-center">
                            <img
                                src={Products.ProductImage}
                                alt={Products.ProductName}
                                className="w-full h-80 object-cover rounded-xl shadow-md"
                            />
                        </div>

                        <div className="flex-1 space-y-3">
                            <h1 className="text-3xl font-bold text-white">{Products.ProductName}</h1>
                            <p className="text-gray-600 text-justify">{Products.Description || "No description available."}</p>

                            <div className="grid grid-cols-2 gap-y-2 mt-4">
                                <p><span className="font-semibold">Origin:</span> {Products.OriginCountry}</p>
                                <p><span className="font-semibold">Available Quantity:</span> {Products.AvailableQuantity}</p>
                                <p><span className="font-semibold">Price:</span> ${Products.Price}</p>
                                <p><span className="font-semibold">Rating:</span> ⭐ {Products.Rating}</p>
                            </div>


                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="mt-5 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-500 transition"
                            >
                                Import Now
                            </button>
                        </div>
                    </div>


                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                            <div className="bg-emerald-50 p-6 rounded-xl w-96 shadow-lg">
                                <h3 className="text-2xl font-bold text-emerald-700 mb-4">Import Product</h3>

                                <form onSubmit={handleSubmit}>
                                    <label className="block font-semibold mb-1">Enter Quantity</label>
                                    <input
                                        type="number"
                                        value={importQuantity}
                                        min={1}
                                        max={Products.AvailableQuantity}
                                        onChange={(e) => setImportQuantity(Number(e.target.value))}
                                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 mb-2"
                                        required
                                    />

                                    {importQuantity > Products.AvailableQuantity && (
                                        <p className="text-red-600 text-sm mb-2">
                                            Quantity cannot exceed available stock!
                                        </p>
                                    )}

                                    <div className="flex justify-end gap-2 mt-3">
                                        <button
                                            type="button"
                                            onClick={() => setIsModalOpen(false)}
                                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={importQuantity > Products.AvailableQuantity}
                                            className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 disabled:bg-gray-400"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductDetailPage;
