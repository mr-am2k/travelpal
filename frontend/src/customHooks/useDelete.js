import { useState, useEffect } from "react";

export const useDelet = (url, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const deleteData = async () => {
      try {
        const response = await fetch(`${url}/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    deleteData();
  }, [url, id]);

  return { data, loading, error };
};
//HOW TO USE
//const { data, loading, error } = useDelete('https://my-api.com/data', id);
