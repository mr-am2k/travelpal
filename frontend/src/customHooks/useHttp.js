import { useState, useEffect } from "react";

export const useHttp = (url, method, body) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method,
          body: method !== "GET" ? JSON.stringify(body) : null,
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, method, body]);

  return { data, loading, error };
};
