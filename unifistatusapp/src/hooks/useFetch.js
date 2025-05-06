import { useState, useEffect } from "react";

export const useFetch = (url, apiKey) => {
    const [ data, setData] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                      'Accept': 'application/json',
                      'X-API-Key': apiKey
                    }
                });
              
                if (!response.ok) {
                    throw new Error(`Erro HTTP! status: ${response.status}`);
                }
              
                const data = await response.json();
                setData(data);
                setLoading(false);
                  console.log(data);
                } catch (error) {
                  console.error('Houve um problema com a requisição:', error);
                }
        };
        fetchData();
    }, [url])

    return { data, loading, error };
}

export default useFetch;