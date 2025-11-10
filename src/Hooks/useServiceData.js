import { useEffect } from "react";
import { useState } from "react"

const useServiceData = () => {
    const [jsonData, setJsonData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/Products');
                const data = await response.json();
                setJsonData(data);
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
    return { jsonData, Loading, Error }
}

export default useServiceData;