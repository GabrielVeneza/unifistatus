import { useState, useEffect, useRef } from "react";


export function useFetch(url: string, apiKey: string) {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "X-API-Key": apiKey,
          },
        });

        if (!response.ok) {
          throw new Error(`Erro HTTP! status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Houve um problema com a requisição:", error);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
}

export default useFetch;