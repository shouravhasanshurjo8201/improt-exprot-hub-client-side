import { Link } from "react-router";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ProductsCard = ({ Product }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const ButtonLink = (<>
        <Link to={`/Products/${Product._id}`} className="btn-primary text-blue-200 w-full ml-0">See Details</Link>
    </>)
    return (
        <div data-aos="fade-up" id={Product.id} className="bg-background4 rounded-2xl shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out">
            <img src={Product.ProductImage} alt={Product.ProductName} className="w-full h-60 object-cover rounded-t-2xl" />
            <div data-aos="fade-up" className="px-2 py-3">
                <div>
                    <h3 className="text-xl text-black font-bold mb-2">{Product.ProductName}</h3>
                    <div className="flex justify-between items-center px-2">
                        <p className="text-blue-200 mb-1">Quantity: {Product.AvailableQuantity}</p>
                        <p className="text-blue-300 font-medium mb-3">$ {Product.Price}</p>
                    </div>
                    <div className="flex justify-between items-center px-2">
                        <p className="text-blue-200 font-medium mb-3">{Product.OriginCountry}</p>
                        <p className="text-yellow-500 mb-1">⭐ {Product.Rating}</p>
                    </div>
                </div>
            <div className="w-full">{ButtonLink}</div>
            </div>
        </div>

    )
}

export default ProductsCard;