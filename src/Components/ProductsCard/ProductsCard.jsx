import { Link } from "react-router";

const ProductsCard = ({ Product }) => {
    return (
        <div>
            <div id={Product.id} data-aos="fade-up" className="from-white via-emerald-50 to-blue-50 rounded-2xl shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out border border-emerald-100 p-2">
                <img src={Product.image} alt={Product.name} className="w-full h-48 object-cover rounded-xl" />
                <div className="px-3 py-2 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl text-black font-semibold mb-2">{Product.ProductName}</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-yellow-600 mb-1">⭐ {Product.rating}</p>
                            <p className="text-gray-500 font-medium mb-3">$ {Product.price}</p>
                        </div>
                    </div>
                    <Link to={`/services/${Product.id}`} className="btn border-none bg-emerald-500 text-white w-full py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard;