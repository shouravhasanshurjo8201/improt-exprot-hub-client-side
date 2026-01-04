import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import ProductsCard from "../../Components/Products/ProductsCard";
import useAllProducts from "../../Hooks/useAllProducts";
import useDynamicTitle from "../../Hooks/useDynamicTitle";
import { FaSearch, FaFilter, FaUndo } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;

const Products = () => {
  const { allProducts, Loading } = useAllProducts();
  useDynamicTitle("All Products");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [rating, setRating] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  /* ================= FILTER + SEARCH + SORT ================= */
  const filteredProducts = useMemo(() => {
    if (!allProducts) return [];
    let data = [...allProducts];

    // Search logic
    if (search.trim()) {
      data = data.filter(product =>
        product.ProductName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category logic
    if (category !== "all") {
      data = data.filter(product => product.Category === category);
    }

    // Min Price logic
    if (minPrice) {
      data = data.filter(product => Number(product.Price) >= Number(minPrice));
    }

    // Rating logic
    if (rating !== "all") {
      data = data.filter(product => Number(product.Rating) >= Number(rating));
    }

    // Sorting logic
    if (sortBy === "priceLow") data.sort((a, b) => a.Price - b.Price);
    if (sortBy === "priceHigh") data.sort((a, b) => b.Price - a.Price);
    if (sortBy === "rating") data.sort((a, b) => b.Rating - a.Rating);

    return data;
  }, [allProducts, search, category, minPrice, rating, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, minPrice, rating, sortBy]);

  // Reset Filters function
  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setMinPrice("");
    setRating("all");
    setSortBy("default");
  };

  if (Loading) return <LoadingPage />;

  return (
    <div className="container mx-auto my-10 px-4 min-h-screen">
      <div data-aos="fade-down" className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-black gradient-text uppercase tracking-tighter">
          Explore Products
        </h2>
        <div className="section-divider mx-auto w-40 mt-2"></div>
      </div>

      <div className="custom-card p-6 mb-12 shadow border-none" data-aos="fade-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 items-end">
          <div className="form-control">
            <label className="label-text font-bold mb-2 flex items-center gap-2"><FaSearch className="text-emerald-500" /> Search</label>
            <input
              type="search"
              placeholder="Product name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered w-full focus:ring-2 focus:ring-emerald-500 "
            />
          </div>

          <div className="form-control">
            <label className="label-text font-bold mb-2 flex items-center gap-2"><FaFilter className="text-emerald-500" /> Category</label>
            <select className="select select-bordered w-full " value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label-text font-bold mb-2 flex items-center gap-2">Min Price</label>
            <input type="number" placeholder="$ 0.00" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="input input-bordered w-full " />
          </div>

          <div className="form-control">
            <label className="label-text font-bold mb-2 flex items-center gap-2">Min Rating</label>
            <select className="select select-bordered w-full " value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="all">Any Rating</option>
              <option value="4">4★ & up</option>
              <option value="3">3★ & up</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label-text font-bold mb-2 flex items-center gap-2"> Sort Orders</label>
            <select className="select select-bordered w-full" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          <button onClick={resetFilters} className="btn-primary  flex gap-2">
            <FaUndo size={14} /> Reset
          </button>
        </div>
      </div>

      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12" data-aos="zoom-in">
          {paginatedProducts.map(product => (
            <ProductsCard key={product._id} Product={product} />
          ))}
        </div>
      ) : (
        <div className="min-h-[40vh] flex flex-col items-center justify-center text-center p-10 bg-base-200 rounded-3xl border-2 border-dashed border-gray-300">
          <h2 className="text-2xl font-bold text-gray-400 mb-2">No Products Matched!</h2>
          <p className="text-gray-500 mb-6">Try changing your search terms or filters to find what you're looking for.</p>
          <button onClick={resetFilters} className="btn bg-emerald-500 border-none text-white px-8">Clear All Filters</button>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-16" data-aos="fade-up">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="btn btn-circle bg-emerald-500 text-white border-none disabled:bg-gray-300"
          >
            ❮
          </button>

          <div className="join">
            {[...Array(totalPages).keys()].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page + 1)}
                className={`join-item btn btn-md border-none ${currentPage === page + 1 ? "bg-emerald-700 text-white" : "bg-base-200 "
                  }`}
              >
                {page + 1}
              </button>
            ))}
          </div>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="btn btn-circle bg-emerald-500 text-white border-none disabled:bg-gray-300"
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;