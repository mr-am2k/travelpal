import { useState, useEffect } from "react";

export const usePut = (url, body) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const putData = async () => {
      try {
        const response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(body),
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
    putData();
  }, [url, body]);

  return { data, loading, error };
};

//HOW TO USE
//const { data, loading, error } = usePut('https://my-api.com/data', { name });
