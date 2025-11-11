import { useEffect } from "react";
import { useState } from "react"

const useLatestProducts = () => {
    const [LatestProducts, setLatestProducts] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/Products/latest');
                const data = await response.json();
                setLatestProducts(data);
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
    return { LatestProducts, Loading, Error }
}

export default useLatestProducts;