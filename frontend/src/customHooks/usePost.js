import { useState, useEffect } from "react";

export const usePost = (url, body) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
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
    postData();
  }, [url, body]);

  return { data, loading, error };
};

//HOW TO USE
//const { data, loading, error } = usePost('https://my-api.com/data', { name });
