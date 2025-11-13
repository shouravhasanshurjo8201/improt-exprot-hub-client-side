import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingPage from "../LoadingPage/LoadingPage";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import useDynamicTitle from "../../Hooks/useDynamicTitle";

const MyImports = () => {
    const { user, loading } = useContext(AuthContext);
    const [imports, setImports] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useDynamicTitle("My Imports Products");

    useEffect(() => {
        if (user?.email) {
            fetch(`https://improt-exprot-hub-server-side.vercel.app/Products/ImporterEmail/${user.email}`)
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

    const handleRemove = (id) => {
        if (confirm("Are you sure you want to remove this product?")) {
            fetch(`https://improt-exprot-hub-server-side.vercel.app/Products/Delete/${id}`, {
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
            <div data-aos="fade-up" className="min-h-[50vh] flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-semibold gradient1 mb-2">
                    No Imported Products Found.
                </h2>
                <p className="text-blue-400">
                    Import products from the Product Details page to see them here.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div data-aos="fade-up">
                <h2 className="text-4xl font-bold text-center "> <span className="gradient1"> My Imported Products </span> </h2>
                <div className="gradient2 w-full md:w-110"></div>
            </div>
            <div data-aos="fade-up" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {imports.map((item) => (
                    <div data-aos="fade-up" key={item._id}  className=" bg-background4 rounded-2xl shadow-md p-4 hover:shadow-lg transition hover:scale-105 duration-300 ease-in-out" >
                        <img src={item.ProductImage}  alt={item.ProductName}  className="w-full h-48 object-cover rounded-xl mb-3"/>
                        <div>
                            <h3 className="text-xl text-black font-bold mb-2">{item.ProductName}</h3>
                            <div className="flex justify-between items-center px-2">
                                <p className="text-blue-200 mb-1">Quantity: {item.AvailableQuantity}</p>
                                <p className="text-blue-300 font-medium mb-3">$ {item.Price}</p>
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <p className="text-blue-200 font-medium mb-3">{item.OriginCountry}</p>
                                <p className="text-yellow-500 mb-1">⭐ {item.Rating}</p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button onClick={() => handleRemove(item._id)} className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 hover:font-semibold"  >
                                Remove
                            </button>

                            <Link to={`/Products/${item._id}`} className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 hover:font-semibold"  >
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
