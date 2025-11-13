import { useEffect } from "react";
import { useState } from "react"

const useAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://improt-exprot-hub-server-side.vercel.app/Products');
                const data = await response.json();
                setAllProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            }
        };
        fetchData();
    }, []);
    return { allProducts, Loading, Error }
}

export default useAllProducts;