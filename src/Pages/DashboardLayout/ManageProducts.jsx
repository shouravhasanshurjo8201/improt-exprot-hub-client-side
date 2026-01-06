import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import sweet from "sweetalert2";
import { Link } from "react-router-dom";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = () => {
        fetch("https://improt-exprot-hub-server-side.vercel.app/Products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = (id) => {
        sweet.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#10b981",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://improt-exprot-hub-server-side.vercel.app/Products/Delete/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            sweet.fire("Deleted!", "Product has been deleted.", "success");
                            const remaining = products.filter(p => p._id !== id);
                            setProducts(remaining);
                        }
                    });
            }
        });
    };

    if (loading) return <div className="flex justify-center py-20"><span className="loading loading-bars loading-lg text-emerald-500"></span></div>;

    return (
        <div className="rounded-xl p-6 md:p-10 shadow-sm border border-gray-100 dark:border-zinc-800">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-black text-zinc-800 dark:text-white">Manage All <span className="text-emerald-500">Products</span></h2>
                    <p className="text-sm text-gray-400">Total Products: {products.length}</p>
                </div>

            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead>
                        <tr className="text-zinc-500 dark:text-zinc-400 border-b dark:border-zinc-800">
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Origin</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id} className="hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors border-b dark:border-zinc-800">
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.ProductImage} alt={product.ProductName} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold text-zinc-700 dark:text-zinc-200">{product.ProductName}</div>
                                </td>
                                <td className="font-bold text-emerald-600">${product.Price}</td>
                                <td>
                                    <span className={`badge border-none font-bold ${product.AvailableQuantity > 0 ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                        {product.AvailableQuantity} pcs
                                    </span>
                                </td>
                                <td className="text-sm italic">{product.OriginCountry}</td>
                                <td>
                                    <div className="flex justify-center gap-2">
                                        {/* View Details */}
                                        <Link to={`/Products/id/${product._id}`} className="btn btn-square btn-sm bg-blue-50 text-blue-600 hover:bg-blue-100 border-none">
                                            <FaEye />
                                        </Link>

                                        {/* Edit Button */}
                                        <Link to={`/dashboard/update-product/${product._id}`} className="btn btn-square btn-sm bg-amber-50 text-amber-600 hover:bg-amber-100 border-none">
                                            <FaEdit />
                                        </Link>

                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className="btn btn-square btn-sm bg-red-50 text-red-600 hover:bg-red-100 border-none"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {products.length === 0 && (
                <div className="text-center py-20 text-gray-400 font-bold">
                    No products found! Start adding some.
                </div>
            )}
        </div>
    );
};

export default ManageProducts;