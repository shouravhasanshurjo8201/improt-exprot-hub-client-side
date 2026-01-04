
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { FaStar, FaGlobe, FaBoxOpen } from "react-icons/fa";
import LoadingPage from "../LoadingPage/LoadingPage";
import PageNotFound from "../PageNotFound/PageNotFound";
import useAllProducts from "../../Hooks/useAllProducts";
import useDynamicTitle from "../../Hooks/useDynamicTitle";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { allProducts, Loading } = useAllProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [importQuantity, setImportQuantity] = useState("");
  const [mainImage, setMainImage] = useState("");

  useDynamicTitle("Product Details");

  const product = allProducts?.find((item) => item._id === id);

  useEffect(() => {
    if (product) {
      setMainImage(
        product.ProductImage ||
        (product.ProductImages && product.ProductImages[0])
      );
    }
  }, [product]);

  if (Loading) return <LoadingPage />;
  if (!product) return <PageNotFound />;

  const {
    ProductName,
    Description,
    ProductImages,
    OriginCountry,
    AvailableQuantity,
    Price,
    Rating,
    Category,
    Reviews,
    RelatedItems,
  } = product;


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login to import products");
      navigate("/login", { state: { from: location }, replace: true });
      return;
    }

    if (Number(importQuantity) > AvailableQuantity) {
      return toast.error("Quantity exceeds available stock!");
    }

    if (Number(importQuantity) <= 0) {
      return toast.error("Please enter a valid quantity");
    }

    const updatedProduct = {
      importQuantity: Number(importQuantity),
      importerEmail: user.email,
    };

    try {
      const res = await fetch(
        `https://improt-exprot-hub-server-side.vercel.app/Products/Patch/${product._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(`Imported ${importQuantity} units of ${product.ProductName}`);
        setIsModalOpen(false);
        setImportQuantity("");

        setTimeout(() => {
          navigate("/MyImports");
        }, 1000);
      } else {
        toast.error(data?.message || "Import failed!");
      }
    } catch (error) {
      console.error("Import error:", error);
      toast.error("Something went wrong!");
    }
  };


  return (
    <div className="min-h-screen bg-base-100 text-base-content py-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 bg-base-200 p-6 md:p-10 rounded-3xl shadow">
          {/* IMAGES */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-base-300">
              <img
                src={mainImage}
                alt={ProductName}
                className="w-full h-[400px] object-cover hover:scale-105 transition"
              />
            </div>

            {ProductImages?.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {ProductImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setMainImage(img)}
                    className={`h-20 w-full object-cover rounded-lg cursor-pointer border-2 ${mainImage === img
                      ? "border-primary"
                      : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    alt="thumb"
                  />
                ))}
              </div>
            )}
          </div>

          {/* OVERVIEW */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              <span className=" text-xl font-bold text-emerald-500 border border-emerald-200 px-2 rounded">
                {Category || "General"}
              </span>

              <h1 className="text-3xl md:text-4xl mt-2 font-bold">
                {ProductName}
              </h1>

              <div className="flex items-center gap-3">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < Math.round(Rating || 0) ? "" : "opacity-30"}
                    />
                  ))}
                </div>
                <span className="font-medium">
                  {Rating || 0} / 5
                </span>
                <span className="opacity-60 text-sm">
                  ({Reviews?.length || 0} reviews)
                </span>
              </div>

              <p className="text-base-content/70 leading-relaxed text-justify">
                {Description ||
                  "This premium product is sourced globally ensuring the highest quality."}
              </p>

              {/* QUICK SPECS */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 p-4 bg-base-100 rounded-xl">
                  <FaGlobe className="text-emerald-300 h-10 w-10" />
                  <div>
                    <p className="text-sm opacity-60">Origin</p>
                    <p className="font-semibold">{OriginCountry}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-base-100 rounded-xl">
                  <FaBoxOpen className="text-emerald-400 w-10 h-10" />
                  <div>
                    <p className="text-sm opacity-60">Stock</p>
                    <p className="font-semibold">
                      {AvailableQuantity} Units
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  if (!user) {
                    toast.error("Please login first");
                    navigate("/login", { state: { from: location }, replace: true });
                    return;
                  }
                  setIsModalOpen(true);
                }}
                className="btn-primary flex-1"
              >
                Import Now
              </button>

            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

          {Reviews?.length ? (
            <div className="grid md:grid-cols-2 gap-4">
              {Reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-base-200 p-5 rounded-2xl border border-base-300"
                >
                  <p className="font-semibold">{review.userName}</p>
                  <div className="flex text-yellow-400 text-sm my-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-base-content/70 italic">
                    “{review.comment}”
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="opacity-60 italic">
              No reviews yet.
            </p>
          )}
        </div>

        {/* RELATED  */}
        {RelatedItems?.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6">
              Related Products
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {RelatedItems.map((item) => (
                <div
                  key={item._id}
                  onClick={() => {
                    navigate(`/products/${item._id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="cursor-pointer bg-base-200 rounded-2xl overflow-hidden border border-base-300 hover:shadow-xl transition"
                >
                  <img
                    src={item.ProductImage}
                    alt={item.ProductName}
                    className="h-36 w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-sm truncate">
                      {item.ProductName}
                    </h3>
                    <p className="text-primary font-bold">
                      ${item.Price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-base-100 p-8 rounded-3xl w-full max-w-md">
              <h3 className="text-xl font-bold mb-4 text-center">
                Import Product
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="number"
                  min="1"
                  max={AvailableQuantity}
                  value={importQuantity}
                  onChange={(e) => setImportQuantity(e.target.value)}
                  placeholder="Enter quantity"
                  className="input input-bordered w-full"
                  required
                />

                <p className="font-semibold text-center">
                  Total: $
                  {(Number(importQuantity || 0) * Price).toLocaleString()}
                </p>

                <div className="flex gap-2">
                  <button className="btn-primary flex-1">
                    Confirm
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="btn btn-ghost flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
