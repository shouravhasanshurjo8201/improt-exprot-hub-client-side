import { Link } from "react-router";

const ProductsCard = ({ Product }) => {
    const ButtonLink = (<>
    <Link to={`/Products/${Product._id}`} className="btn btn-outline btn-accent bg-emerald-600 text-white font-bold border-none relative mx-4 py-2 px-8 text-base overflow-hidden transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-600 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] rounded-[15px] hover:before:left-0 cursor-pointer">View Details</Link>
  </>)
    return (
        <div>
            <div id={Product.id} data-aos="fade-up" className="from-white via-emerald-50 to-blue-50 rounded-2xl shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out border border-emerald-100 p-2">
                <img src={Product.ProductImage} alt={Product.ProductName} className="w-full h-60 object-cover rounded-xl" />
                <div className="px-3 py-2 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl text-black font-semibold mb-2">{Product.ProductName}</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 font-medium mb-3">$ {Product.Price}</p>
                            <p className="text-yellow-600 mb-1">Quantity: {Product.AvailableQuantity}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 font-medium mb-3">{Product.OriginCountry}</p>
                            <p className="text-yellow-600 mb-1">⭐ {Product.Rating}</p>
                        </div>
                    </div>
                    {ButtonLink}
                </div>
            </div>
        </div>
    )
}

export default ProductsCard;